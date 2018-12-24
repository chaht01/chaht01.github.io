import React from "react";
import styled from "styled-components";
import { colors } from "../var";
import { Stage, Layer, Rect, Text, Circle } from "react-konva";
import Konva from "konva";

const ConceptWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const ConceptRep = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${100 / 1.618}%;
  background: ${props => props.color};
`;

ConceptRep.Inner = styled(Stage)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  ${props =>
    props.filter
      ? `
  & canvas {
    -webkit-filter: url("#goo");
    filter: url("#goo");
  }`
      : null}
`;

class Clip extends React.Component {
  constructor() {
    super();
    this.state = {
      ratio: 0
    };
  }
  componentDidMount() {
    let duration = 2500;
    let anim = new Konva.Animation(frame => {
      const tick = frame.time % duration;
      let ratio = 0;
      if (tick < duration - 1000) {
        ratio = tick / (duration - 1000);
      } else {
        ratio = 1;
      }
      this.setState({ ratio });
    });
    anim.start();
  }
  render() {
    const { width, height } = this.props;
    return (
      <ConceptRep.Inner width={width} height={height}>
        <Layer>
          <Rect
            x={0}
            y={height * 0.98}
            width={width * this.state.ratio}
            height={height * 0.02}
            fill={"#f94c1e"}
          />
        </Layer>
      </ConceptRep.Inner>
    );
  }
}

class Concept extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.state = {
      size: {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }
    };
  }
  refCallback = element => {
    if (element) {
      this.setState({
        size: element.getBoundingClientRect()
      });
    }
  };
  componentDidMount() {
    this.refCallback(this.ref.current);
    window.addEventListener("resize", () => {
      this.refCallback(this.ref.current);
    });
  }
  render() {
    return (
      <ConceptWrapper>
        <ConceptRep color={this.props.color} ref={this.ref}>
          <Clip width={this.state.size.width} height={this.state.size.height} />
        </ConceptRep>
      </ConceptWrapper>
    );
  }
}

export { Concept };
