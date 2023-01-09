import Left from "./Components/Left";
import Middle from "./Components/Middle";
import Right from "./Components/Right";
import "./Styles/App.css";

function App() {
  return (
    <div className="main">
      <Left className="left"></Left>
      <Middle className="middle"></Middle>
      <Right className="right"></Right>
    </div>
  );
}

export default App;
