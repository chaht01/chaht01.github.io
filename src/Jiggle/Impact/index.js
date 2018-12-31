import React from "react";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle,
  ArticleSubTitle
} from "../Header";
import fw from "./img/fw.jpeg";
import ps from "./img/ps.jpeg";
import mt from "./img/mt.jpeg";
import example1 from "./img/example1.mp4";
import example2 from "./img/example2.mp4";
import styled, { css } from "styled-components";
import { Concept } from "../Concepts";

import pxToVw from "../../Helper/pxToVw";

import { colors } from "../var";

const ColorParagraph = styled.div`
  background: ${props => props.color};
`;

const PresentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45vw;
  & > img {
    height: 90%;
    width: auto;
  }
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

const SmallGap = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6">
        <div className="ratio--4-1" />
      </div>
    </div>
  );
};

const Impact = () => {
  return (
    <React.Fragment>
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Impact</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-16 col-md-12">
          <SectionDescription>
            For 2 months, we felt some pressure whether we can solve this big
            problem. There were many iterations to redesign and implement but
            eventually, we could take a chance to show our service to the world.
          </SectionDescription>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleTitle>Spread The Message</ArticleTitle>
              <ArticleParagraph>
                Luckily, we had many opportunities to present our idea and
                progress. Even when we were not prepared, there were many
                feedbacks to enhance our service quality. We were surprised that
                many journalists have wanted our service and technical advisory
                for adopting our core service to their CMS. This was the first
                time we can change the world.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <ColorParagraph color={"#0c0300"}>
        <div className="row center-xs">
          <PresentContainer>
            <img className="ratio__img" src={ps} />
          </PresentContainer>
        </div>
      </ColorParagraph>

      <ColorParagraph color={"#ffffff"}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-20">
            <div className="row center-xs">
              <div className="col-xs-11">
                <img className="ratio__img" src={mt} />
              </div>
              <div className="col-xs-11 col-xs-offset-1">
                <img className="ratio__img" src={fw} />
              </div>
            </div>
          </div>
        </div>
        <SmallGap />
      </ColorParagraph>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleTitle>Change Media</ArticleTitle>
              <ArticleParagraph>
                The final destination might be seeing whether our challenge
                really impacts on the world. At the first time the chart made
                from our service publish to the portal site, we didn't yet
                really feel this happened. Without any plugin or additional
                lesson to the journalist, we succeed to see our chart has the
                power to change our media environment and problem.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />

      <ColorParagraph color={"#513bd6"}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-16 col-md-12">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="ratio__img shadow-5"
            >
              <source src={example1} type="video/mp4" />
            </video>
          </div>
        </div>
        <SmallGap />
      </ColorParagraph>
      <ColorParagraph color={colors.semiblack}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-6 col-md-4">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="ratio__img shadow-5"
            >
              <source src={example2} type="video/mp4" />
            </video>
          </div>
        </div>
        <SmallGap />
      </ColorParagraph>
    </React.Fragment>
  );
};

export default Impact;
