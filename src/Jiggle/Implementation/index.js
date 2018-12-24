import React from "react";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle,
  ArticleSubTitle
} from "../Header";
import impl_diagram from "./img/impl_diagram.png";
import uml from "./img/uml.png";
import uml_board from "./img/uml_board.png";
import cell_algo from "./img/cell_algo.png";
import handle_image from "./img/handle_image.png";
import crossplat from "./img/crossplat.png";
import styled, { css } from "styled-components";
import { Concept } from "../Concepts";

import pxToVw from "../../Helper/pxToVw";

import { colors } from "../var";

const PicGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const ProtoImgWrapper = styled.div`
  position: relative;
  display: block;
  &:after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    background: #002f52;
    opacity: 0.3;
  }
`;
const ProtoImg = styled.img`
  position: relative;
`;

const ColorParagraph = styled.div`
  background: ${props => props.color};
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

const Implementation = () => {
  return (
    <React.Fragment>
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Implementation</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-16 col-md-12">
          <SectionDescription>
            With the mission of "Benefit media with technology", we agreed with
            open our service and core project public. So we wanted our Jiggle
            service also be a client of open source library that we'll make. By
            doing this, many developers and other media companies would try to
            build better chart/service later. Our philosophy could be found from
            overall structure.
          </SectionDescription>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-16 col-md-12">
          <img className="ratio__img" src={impl_diagram} />
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Jiggle Core</ArticleSubTitle>
              <ArticleTitle>Chart Abstraction</ArticleTitle>
              <ArticleParagraph>
                To solve complex and sophisticated problem, it is necessary to
                make the problem simple as possible and usually call this
                process as "Abstraction". Because our chart creating core
                library also transform to various kinds of chart with additional
                features, we should abstract our core chart functionalities.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-20 col-md-12">
          <div className="row center-xs">
            <div className="col-xs-11">
              <img className="ratio__img" src={uml_board} />
            </div>
            <div className="col-xs-11 col-xs-offset-1">
              <ColorParagraph
                color={"#37ce75"}
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center"
                }}
              >
                <img className="ratio__img" src={uml} />
              </ColorParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleParagraph>
                Finally we wrapped d3.js chart library in our way. It was
                mandatory because we redefine chart type to including shape,
                animation and intention. To represent them, CommonFactory must
                have <br />
                <br />
                <b>Drawing()</b>: Shaping
                <br />
                <b>TrainstionRendering()</b>: Define transition animation
                according to the template type
                <br />
                <b>TransitionRecording()</b>: Record to export results for
                publishing
                <br />
                <br />
                With CommonFactory, any client can define any shape, transition
                and even recording(intention) with some development.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Jiggle Web</ArticleSubTitle>
              <ArticleTitle>Handle Input</ArticleTitle>
              <ArticleParagraph>
                As long as we chose to use 'Cell-like' UI, there must be some
                tricky input cases. Because 'Handsontable' provides powerful
                features to use 'Cell-like' function, put UI on our service was
                really cheap. However, handling data should be process by our
                algorithm so that devised some steps to resolve it.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />

      <ColorParagraph color={"#ffffff"}>
        <div className="row center-xs">
          <div className="col-xs-24 col-md-20">
            <img className="ratio__img" src={cell_algo} />
          </div>
        </div>
      </ColorParagraph>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Jiggle Web</ArticleSubTitle>
              <ArticleTitle>Handle Image</ArticleTitle>
              <ArticleParagraph>
                One of main reason to design and implementing styling part was{" "}
                <b>image attachment</b>. Even though we've already known
                attatching images harm visualization itself, due to its
                prevalence, we have no choice but implementing this feature. The
                real problem of attaching images is it would hide data object
                when we merely give maker the controller. We solve this case
                elgantly: only if transforming mode, that image cover chart data
                object.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <ColorParagraph color={"#ffffff"}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-24 col-md-20">
            <img className="ratio__img" src={handle_image} />
          </div>
        </div>
      </ColorParagraph>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Jiggle Core + Web</ArticleSubTitle>
              <ArticleTitle>Export as GIF</ArticleTitle>
              <ArticleParagraph>
                Nothing is complete unless you put in final shape. Even though
                we help journalist creating their own chart, if we fail to
                publish it to CMS and portal sites, this format cannot be
                accepted.
                <br />
                <br />
                It is not easy to think that <b>GIF</b> will be an answer in
                case all dynamic scripting is rejected. GIF can express
                transition itself and be accepted many platforms. It even
                doesn't require user to play cause it loops automatically. Of
                course, it has many flaws as well. Due to its old format,
                usually it has large volume, low framerate and unable to seek
                some point(pause or stop). However we thought it's enough to
                deliver our mission to Korea readers.
                <br />
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-20">
          <img className="ratio__img" src={crossplat} />
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleParagraph>
                New type of chart image would make typical reader confused with
                which part they should see. It is because GIF format loops and
                doesn't provide seek function. The <b>'progress bar'</b> can be
                a rescue! We posed progress bar on our chart and though it can
                be a great role to express our BI(Brand Identity).
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-10 col-md-6">
          <Concept color={"#ffffff"} />
        </div>
        <div className="col-xs-10 col-md-6 col-xs-offset-1">
          <Concept color={colors.semiblack} />
        </div>
      </div>
      <ResponsiveGap />
    </React.Fragment>
  );
};

export default Implementation;
