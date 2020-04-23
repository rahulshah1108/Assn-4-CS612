import React, { Component } from "react";
import n_logo from "./media/ddg.png"


class DuckDuckGo extends Component {
  render() {
    return (
      <div className="card">
        <h1>Duck Duck GO</h1>
        <img src={n_logo} className="logo" alt="DDG_logo" />

        <p>DuckDuckGo (also abbreviated as DDG) is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results.[4] DuckDuckGo distinguishes itself from other search engines by not profiling its users and by showing all users the same search results for a given search term.</p>
        <p>The company is based in Paoli, Pennsylvania, in Greater Philadelphia, and has 67 employees as of July 2019.[3] The company name is a reference to the children's game duck, duck, goose.</p>
        <div>Date: 04/15/2020</div>
      </div>
    );
  }
}

export default DuckDuckGo;