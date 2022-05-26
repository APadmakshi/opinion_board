import "./App.css";
import React, { Component } from "react";
import OpinionApp from "./components/opinion/OpinionApp";
import { Navigate } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <OpinionApp />
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return <div className="FirstComponent">FirstComponent</div>;
  }
}

class SecondComponent extends Component {
  render() {
    return <div className="SecondComponent">SecondComponent</div>;
  }
}

function ThirdComponent() {
  return <div className="thirdComponent">Third Component</div>;
}

export default App;
