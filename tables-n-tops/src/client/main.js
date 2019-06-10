"use strict";

import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowerRouter>
                <span>Testing</span>
            </BrowerRouter>
        )
    }
}

render(<MyApp />, document.getElementById("mainDiv"));