import React from "react";

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          How Are You! {this.props.name} and {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default ClassComponent;
