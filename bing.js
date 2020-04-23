import React, { Component } from "react";
import r_logo from "./media/bing.png"


class Bing extends Component {
  render() {
    return (
      <div className="card">
        <h2>Bing</h2>
        <img src={r_logo} className="logo" alt="Bing_logo" />

        <p>Bing is a web search engine owned and operated by Microsoft. The service has its origins in Microsoft's previous search engines: MSN Search, Windows Live Search and later Live Search. Bing provides a variety of search services, including web, video, image and map search products. It is developed using ASP.NET</p>
          <p>Bing, Microsoft's replacement for Live Search, was unveiled by Microsoft CEO Steve Ballmer on May 28, 2009, at the All Things Digital conference in San Diego, California, for release on June 3, 2009.[3] Notable new features at the time included the listing of search suggestions while queries are entered and a list of related searches (called "Explore pane") based on semantic technology from Powerset,[4] which Microsoft had acquired in 2008.</p>
        <div>Date: 04/15/2020</div>
      </div>
    );
  }
}

export default Bing;