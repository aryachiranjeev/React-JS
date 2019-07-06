import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor!!!"
    };
  }

  changeMessage() {
    this.setState({
      message: "thank you for subscribing"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
    //return <h1>Welcome Visitor</h1>;
  }
}

export default Message;
