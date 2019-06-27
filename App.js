import React from "react";
import "./App.css";
import Blog from "./Blog";
import Output from "./output";
import Blog2 from "./Blog2";
import Output2 from "./output2";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }
  // componentWillMount() {
  //   const arr = JSON.parse(localStorage.getItem("post"));
  //   this.setState({
  //     array: []
  //   });
  // }
  render() {
    return (
      <div className="blog">
        <Blog />
        <Output />
        <Blog2 />
        <Output2 />
      </div>
    );
  }
}
export default App;
// console.log("enter" + this.state.value);
