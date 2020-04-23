import React, { Component } from "react";
import r_logo from "./media/bing.png"
import a_logo from "./media/google.png"
import n_logo from "./media/ddg.png"


import {NavLink} from "react-router-dom";

class Container extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <h1><NavLink to="/react">Bing</NavLink></h1>
                    <img src={r_logo} className="react-logo" alt="react_logo" />
                    <p>Bing is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image and map search products. It is developed using ASP.NET.</p>
                    <div>Date: 04/15/2020</div>
                </div>
                <div className="card">
                    <h1><NavLink to="/angular">Google</NavLink></h1>
                    <img src={a_logo} className="react-logo" alt="react_logo" />

                    <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Microsoft</p>
                    <div>Date: 04/15/2020</div>
                </div>
                <div className="card">
                    <h1><NavLink to="/node">Duck Duck Go</NavLink></h1>
                    <img src={n_logo} className="reat-logo" alt="ddg_logo" />
                    <p>DuckDuckGo (also abbreviated as DDG) is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results.[4] DuckDuckGo distinguishes itself from other search engines by not profiling its users and by showing all users the same search results for a given search term</p>
                    <div>Date: 04/15/2020</div>
                </div>
            </div>
        );
    }
}

export default Container;