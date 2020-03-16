import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/NavBar.js";
import Info from './component/Info.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className='cardDisp'>
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
