import React from "react";
import blendStyle from "../blendStyle";
import Intro from "./Intro";
import { colors } from "./var";
import "./ndf.css";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Preview from "./Preview";

const BlackContainer = styled.div`
  background: ${colors.semiblack};
  color: ${colors.semiwhite};
  width: 100%;
  overflow-x: hidden;
`;

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
    document.body.style.backgroundColor = "#62449f";
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = "initial";
  }
  render() {
    return (
      <BlackContainer>
        <Intro />
        <Preview />
      </BlackContainer>
    );
  }
}

export default Twitch;
