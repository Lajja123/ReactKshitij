import logo from "./logo.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import Jsx from "./components/Jsx";
import State from "./components/State";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <State /> */}
      {/* <Counter />
      <FunctionClick />
      <ClassClick /> */}
      <EventBind />
      {/* <FunctionalComponent name="xyz" />
      <FunctionalComponent name="abc" />
      <FunctionalComponent name="pqr" heroName="Greetings">
        <p> This is props example</p>
        <button>Action</button>
      </FunctionalComponent>
      <ClassComponent name="darshan" heroName="jaydeep">
        <p>Good Morning!</p>
      </ClassComponent>
      <ClassComponent name="neha" heroName="sanika" />
      <ClassComponent name="chirag" heroName="karan" />
      <Jsx /> */}
    </div>
  );
}

export default App;
