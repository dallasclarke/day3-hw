import React, { Component } from "react";

import Fruit from "./components/Fruit";
import './App.css';

class App extends Component {
  state = {
    fruit: "Apple",
    url: "https://i.ytimg.com/vi/aQ4CE0XA1AA/maxresdefault.jpg",
  };

  changeFruit = (e) => {
    this.setState({
      fruit: e.target.value
    })
  }

  render() {
    return (
    <div className="App">
      <Fruit 
        name={this.state.fruit}
        changeFruit={this.changeFruit}
      />
    </div>
    )
  }
}

export default App;
