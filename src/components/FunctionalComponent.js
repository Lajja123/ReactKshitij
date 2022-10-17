import React from "react";

// function FunctionalComponent() {
//   return <h1>Hello lajja</h1>;
// }

// const FunctionalComponent = () => <h1>Hello Lajja</h1>;

const FunctionalComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} and {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default FunctionalComponent;
