import React, { Component } from 'react'
import "./nav.css"
import logo from "./../../images/logo.jpg"

type MyProps = {
    // using `interface` is also ok
    
  };
  type MyState = {
    count: number; // like this
  };
  class Nav extends React.Component<MyProps> {
    render() {
      return (
        <div className="nav">
            <div className="nav__blocks">
                <img src={logo}></img>
                <div className="nav__blocks"></div>
                <div className="nav_blocks"></div>
            </div>
        </div>
      );
    }
  }

  export default Nav;