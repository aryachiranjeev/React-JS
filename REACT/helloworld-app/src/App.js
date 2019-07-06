import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
//import { Greet } from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/functionclick";
import ClassClick from "./components/classclick";
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        <ClassClick />
        {/* <Counter /> */}
        {/* <Message /> */}

        {/* <Greet name="kanu" heroName="chiru ki bestest friend">
          <p>This is children props</p>
        </Greet>
        <Greet name="manu" heroName="chiru ki bff">
          <button>Action</button>
        </Greet>
        <Greet name="tanu" heroName="chiru ki infinte trustful bff" />
        <Welcome name="shivu" heroName="loves chiru" /> */}
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}
*/
export default App;
