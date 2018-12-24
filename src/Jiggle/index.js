import React from "react";
import blendStyle from "../blendStyle";
import Intro from "./Intro";
import { colors } from "./var";
import "./ndf.css";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Motivation from "./Motivation";
import Problems from "./Problems";
import Goals from "./Goals";
import Design from "./Design";
import Implementation from "./Implementation";
import Impact from "./Impact";

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

class Jiggle extends React.Component {
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
    document.body.style.backgroundColor = colors.lightGreeny;
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = "initial";
  }
  render() {
    return (
      <Container>
        <Intro
          scrolltop={this.props.scrolltop}
          windowSize={this.props.windowSize}
        />
        <Motivation />
        <Problems />
        <Goals />
        <Design />
        <Implementation />
        <Impact />
      </Container>
    );
  }
}

export default Jiggle;
