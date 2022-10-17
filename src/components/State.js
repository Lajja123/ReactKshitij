import React from "react";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Why Leave Me??",
    };
  }
  changeMessage() {
    this.setState({
      message: "Come Back Please!!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Life</button>
      </div>
    );
  }
}
export default State;
