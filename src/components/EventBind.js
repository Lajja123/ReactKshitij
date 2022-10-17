import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome To Ahmedabad",
    };
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }
  clickEventHandler() {
    this.setState({
      message: "Welcome to Patan",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickEventHandler.bind(this)}>Click Here</button> */}
        {/* <button onClick={() => this.clickEventHandler()}>Click Here</button> */}
        <button onClick={this.clickEventHandler}>Click Here</button>
      </div>
    );
  }
}

export default EventBind;
