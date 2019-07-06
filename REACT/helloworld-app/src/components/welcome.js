import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        {this.props.name} {this.props.heroName} very much
      </h1>
    );
  }
}

export default Welcome;
