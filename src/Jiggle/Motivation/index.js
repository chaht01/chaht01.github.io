import React from "react";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle
} from "../Header";
import chartKorea from "./img/korea_chart.png";
import chartForeign from "./img/clip.mp4";
import styled, { css } from "styled-components";
import { colors } from "../var";

const SkewContainer = styled.div`
  position: relative;
  transform: rotate3D(-2, 1, -2, -60deg);
`;

const FixedHeightRow = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
`;

const Shaded = css`
  position: absolute;
  display: block;
  height: 100%;
  width: auto;
  opacity: 0.4;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 1, 17, 0.4);
  }
`;

const ShadedLeft = styled.video`
  ${Shaded}
  right: 100%;
`;
const ShadedRight = styled.img`
  ${Shaded}
  left: 100%;
`;

const Container = styled.div`
  background: ${colors.black};
  color: ${colors.semiwhite};
  width: 100%;
  overflow-x: hidden;
`;

const ResponsiveGap = () => {
  return (
    <div className="row">
      <div className="col-xs col-sm-12">
        <div className="ratio--2-1" />
      </div>
    </div>
  );
};

const Motivation = () => {
  return (
    <Container>
      <ResponsiveGap />
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Motivation</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-16 col-md-12">
          <SectionDescription>
            There have been already many data visualization tools on web. In
            industries, universities, and even media, these tools are widely
            used. Observing charts on web news in Korea, we only could find
            static chart images on any material.
            <br />
            <br />
            In contrast to our situation, many major press media like NYT or WP
            rather tried and led this new type of media on web. For example, NYT
            shocked other media with "The Snowfall" which is interactive web
            based post and even these days, they continuously make their own
            contents with many feasible features of web. Of course, it would not
            be any matter our chart remains static images cause with this, we're
            able to know what it means. However, because we think public has
            right to receive benefits from technology, we started to figure out
            this problem.
          </SectionDescription>
        </div>
      </div>
      <div className="row">
        <div class="col-xs-12">
          <div class="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs" style={{ height: "100vh" }}>
        <div className="col-xs-2 col-lg-6 col-xs-offset-reverse-4 col-lg-offset-reverse-2">
          <SkewContainer>
            <FixedHeightRow>
              <ShadedRight src={chartKorea} className="shadow-5" />
              <ShadedLeft autoPlay muted playsInline loop className="shadow-5">
                <source src={chartForeign} type="video/mp4" />
              </ShadedLeft>
            </FixedHeightRow>
          </SkewContainer>
        </div>
      </div>
    </Container>
  );
};

export default Motivation;
