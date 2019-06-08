"use strict";

let path = require("path"),
    fs = require("fs"),
    http = require("http"),
    https = require("https"),
    express = require("express"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    session = require("express-session"),
    mongoose = require("mongoose"),
    envConfig = require("simple-env-config");

const env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

const setupServer = async () => {
    const conf = await envConfig("./config/config.json", env);
    const port = process.env.PORT ? process.env.PORT : conf.port;

    let app = express();
    if(env !== "test") app.use(logger("dev"));
    app.engine("pug", require("pug").__express);
    app.set("views", __dirname);
    app.use(express.static(path.join(__dirname, "../../public")));
    app.use(logger('dev'));

    app.store = session({
        name: "session",
        secret: "tarrasque",
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: "/"
        }
    });
    app.use(app.store);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    try {
        console.log("Connecting to MongoDB");
        mongoose.set("useFindAnyModify", false);
        mongoose.set("useCreateIndex", true);
        await mongoose.connect(conf.mongodb, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected: ${conf.mongodb}`);
    } catch (err) {
        console.log(err);
        process.exit(-1);
    }

    app.models = {
        PC: require("./models/characters/pc"),
        Enemy: require("./models/characters/enemy"),
        NPC: require("./models/characters/npc"),
        Location: require("./models/location"),
        User: require("./models/user")
    };

    require("./api")(app);

    app.get("*", (req, res) => {
        const user = req.session.user;
        console.log(`Loading app for: ${user ? user.username : "nobody!"}`);
        let preloadedState = user
            ? {
            username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                primary_email: user.primary_email,
                city: user.city,
            }
            : {};
        preloadedState = JSON.stringify(preloadedState).replace(/</g, "\\u003c");
        res.render("base.pug", {
            state: preloadedState
        });
    });

    let server;
    if (env === "production") {
        const options = {
            key: fs.readFileSynce(conf.security.keyPath),
            cert: fs.readFileSync(conf.security.certPath),
            ca: fs.readFileSync(conf.security.caPath)
        };

        server = https.createServer(options, app).listen(port, () => {
            console.log(`Secure tables-n-tops listening on: ${server.address().port}`);
        });

        http
            .createServer((req, res) => {
                const location = `https://${req.headers.host}${req.url}`;
                console.log(`Redirect to: ${location}`);
                res.writeHead(302, { Location: location});
                res.end();
            })
            .listen(80, () => {
                console.log(`tables-n-tops listening on 80 for HTTPS redirect`);
            });
    } else {
        server = app.listen(port, () => {
            console.log(`tables-n-tops ${env} listening on: ${server.address().port}`);
        });
    }
};



setupServer();