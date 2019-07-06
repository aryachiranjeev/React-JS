import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("clicked the class button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click class button</button>
      </div>
    );
  }
}

export default ClassClick;
