import React from "react";
import blendStyle from "../blendStyle";
import Intro from "./Intro";
import Inspiration from "./Inspiration";
import Ideation from "./Ideation";
import Implementation from "./Implementation";

import "./ndf.css";
import ReactDOM from "react-dom";
const style = {
  scrollDisable: {
    width: "100%",
    overflowX: "hidden"
  }
};
class Twitch extends React.Component {
  constructor(props) {
    super(props);
    this.blendStyle = blendStyle.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    var elem = ReactDOM.findDOMNode(this);
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      // Now set a transition on the opacity
      elem.style.transition = "opacity 250ms";
      // and set the opacity to 1
      elem.style.opacity = 1;
    });
  }
  render() {
    return (
      <div style={style.scrollDisable}>
        <Intro />
        <Inspiration />
        <Ideation />
        <Implementation />
      </div>
    );
  }
}

export default Twitch;
