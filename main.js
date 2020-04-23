import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";
import Content from "./content";

class Main extends Component {


    render() {
        return (
            <div>
                <Header />
                <div className="flex">
                    <Content />
                    <Nav />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;