import React from "react";

const Jsx = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "LamprosTech")
  );
};
export default Jsx;
