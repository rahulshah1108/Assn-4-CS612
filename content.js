import React, { Component } from "react";
import { Route, Switch } from "react-router";
import {HashRouter} from "react-router-dom";
import Bing from "./bing";
import DuckDuckGo from "./duckduck";
import Google from "./google";
import Container from "./container";

class Content extends Component {
    render() {
        return (
            <HashRouter>
                <div className="flex-left">
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Container} />
                            <Route path="/react" component={Bing} />
                            <Route path="/node" component={DuckDuckGo} />
                            <Route path="/angular" component={Google} />
                        </Switch>
                    </div>


                </div>
            </HashRouter>
        );
    }
}

export default Content;