import React from "react";
import tendencyVideo from "./img/tendency.mp4";
import brushingVideo from "./img/brushing.mp4";
import drilldownVideo from "./img/drilldown.mp4";
import chatlogVideo from "./img/chatlog.mp4";
import scaleRulerVideo from "./img/scalable_ruler.mp4";

import tendencyGif from "./img/tendency.gif";
import brushingGif from "./img/brushing.gif";
import drilldownGif from "./img/drilldown.gif";
import chatlogGif from "./img/chatlog_low.gif";
import stackedBar from "./img/stacked_bar.png";
import scaleRuler from "./img/scalable_ruler.gif";
import scaleRulerMobile from "./img/scalable_ruler_mobile.gif";
import beforeLabeling from "./img/before_labeling.png";
import afterLabeling from "./img/after_labeling.png";
import transitionArrow from "./img/transition.png";
import performance from "./img/performance.png";
import feedInspectorIntro from "./img/feed_inspector_intro.png";
import biasDiagram from "./img/bias_diagram.png";

import tendencyGifMobile from "./img/tendency_mobile.gif";
import brushingGifMobile from "./img/brushing_mobile.gif";
import drilldownGifMobile from "./img/drilldown_mobile.gif";
import chatlogGifMobile from "./img/chatlog_low_mobile.gif";

import { HotConcept, ReferConcept, TendencyConcept } from "../Concepts";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle
} from "../Header";
import styled from "styled-components";

const ResponsiveGap = () => {
  return (
    <div className="row">
      <div className="col-xs col-sm-12">
        <div className="ratio--2-1" />
      </div>
    </div>
  );
};

const Preview = () => {
  return (
    <React.Fragment>
      <ResponsiveGap />
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Motivation</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-16">
          <SectionDescription>
            With the advent of the Independent(personal)-media era and the
            ability to watch broadcasts via the Internet, the types, lengths,
            and timing of video content have become diverse. In addition to
            this, it is able to add real-time response to the video through
            chat. In recent years, there have been more and more real-time
            responses to real-time sports events, e-sports, and presidential
            campaigns. It can be seen that the reaction of the viewer is
            projected on the image while the existing image is unilaterally
            deviated from the limitation that was transmitted to the viewer.
            <br />
            <br />
            So I thought it would be a good idea to know where the important
            parts of the video were and what the audience was so enthusiastic
            about. The goal of this project is knowing three things like below.
          </SectionDescription>
        </div>
      </div>
      <div className="row">
        <div class="col-xs-12">
          <div class="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs" style={{ overflow: "hidden" }}>
        <div className="col-xs-7 col-md-6">
          <HotConcept className="shadow-5" label="Reactive">
            Which scene or part of the video was the most reactive?
          </HotConcept>
        </div>
        <div className="col-xs-7 col-md-6 col-xs-offset-1 col-md-offset-1">
          <ReferConcept className="shadow-5" label="Mentioned">
            What words people mostly mentioned about?
          </ReferConcept>
        </div>
        <div className="col-xs-7 col-md-6 col-xs-offset-1 col-md-offset-1">
          <TendencyConcept className="shadow-5" label="Bias">
            Among mentioned words, how could we measure the intensity of the
            specific word?
          </TendencyConcept>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Implementation</SectionTitle>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="row top-xs">
        <div className="col-xs-11 col-sm-10 col-xs-offset-1 col-sm-offset-2 shadow-5">
          <video autoPlay muted playsInline loop class="ratio__img">
            <source src={tendencyVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-1">
          <div className="idea">
            <div className="title title--orange">Volume-Bias Chart</div>

            <ArticleParagraph className="desc desc--below">
              Although there are words as "mostly mentioned" throughout the
              video content (Volume), the highest ranking of the word does not
              guarantee that the maximum feed amount (Bias) of this word is
              highest at a specific time. This information is worth visualizing
              in that it helps distinguish between "event indicator" and
              "universal attention" that should be of interest to the video. I
              designed this new-type idiom and named it as "Volume-Bias" chart.
            </ArticleParagraph>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-xs-offset-4">
          <img
            className="ratio__img"
            src={biasDiagram}
            style={{ opacity: 0.3, marginTop: "-14vw" }}
          />
        </div>
      </div>
      <div className="row center-xs start-sm">
        <div className="col-xs-12">
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-20">
          <div className="idea">
            <div className="title title--orange">Feed Inspector</div>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-20 col-sm-14">
          <div className="idea">
            <img class="ratio__img" src={feedInspectorIntro} />
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-14">
          <div className="idea">
            <ArticleParagraph className="desc">
              There are differences in the attributes of <b>video</b> and{" "}
              <b>chat</b>. An video is generated by only one event at a time,
              the result of which is a series of successive events. Chat, the
              response to a video, can have multiple simultaneous responses at
              any one time. In addition, all of these reactions may not be
              classified into any of the data preprocessing performed
              previously, Also in the opposite way, multiple classification
              criteria may be applied at the same time.
              <br />
              <br />
              Therefore, it seems possible to express the trend of the
              continuous variable by words in the stream graph, but the chats
              belonging to the classification standard of the actual chat feed
              could not be used because they could not be represented
              continuously. I could use it to 'look like a sequantial', but I
              thought I could make a misconception about the goal of showing
              some of the attention to the visual content. So, this '
              <b>Feed Inspector</b>' can be used to help handle these concerns
              separately in the interactive way.
            </ArticleParagraph>
          </div>
        </div>
      </div>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22">
          <ArticleTitle>Keyword Stream Graph</ArticleTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-3">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs middle-xs">
        <img
          className="ratio__img"
          src={stackedBar}
          style={{ position: "absolute", opacity: 0.3 }}
        />

        <div className="col-xs-10 col-sm-8">
          <ArticleParagraph>
            As a result, I've visualized the change in the chat keyword over
            time with the stacked bar graph. At this time, there can be one of
            cases: [1] Include only one keyword. [2] Include more than one
            keyword. or [3] Does not include any keywords. Although
            visualization classifies chat texts into words and selects keywords,
            essentially, the units accumulated at one point are text
            (sentences). Therfore, in case of [2], feed was classified by
            keyword with the highest ranking(The mostly mentioned keyword). In
            the case of [3], it was excluded from the visualization because it
            could create a misunderstanding in the purpose of helping the viewer
            through the 'sentence containing meaningful contents’.
          </ArticleParagraph>
        </div>
        <div className="col-xs-10 col-sm-4 col-xs-offset-1">
          <div className="ratio--4-1" />
          <video
            autoPlay
            muted
            playsInline
            loop
            class="ratio__img shadow-5"
            style={{ position: "relative" }}
          >
            <source src={scaleRulerVideo} type="video/mp4" />
          </video>

          <div className="ratio--4-1" />
        </div>
        <div className="col-xs-20 col-sm-8 col-sm-offset-1">
          <ArticleParagraph>
            However, Simply replacing 1 second with 1px and displaying results
            as a stacked bar graph has the following problems.
            <br />
            <br />
            <i>
              1. The stream traverse length of the visualization result depends
              on the length of the video.
            </i>
            <br />
            <i>
              2. Because the limitation of the screen size, data can not be
              shown at a glance.
            </i>
            <br />
            <br />
            This project provides a range slider to control the stacked bar
            graph and provide the interface from '1px per second' to 'Full
            screen height as whole video segment length'.
            <br />
            <br />
          </ArticleParagraph>
        </div>
      </div>

      <ResponsiveGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-18">
          <ArticleTitle>Render Performance</ArticleTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-18" style={{ marginTop: "-4vw" }}>
          <img className="ratio__img" src={performance} />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-20 col-sm-8">
          <ArticleParagraph>
            {
              "It is possible to render a variety of video lengths and feeds with a range slider, which takes a lot of time with the existing d3 stacke bar chart. This is because the size of the final and quarter-round chat data used for implementation is 18000 seconds in terms of time, and it is not so small as 20 keywords, and it is because a lot of memory is used to make it a document object (DOM) binding with data in d3. In this project, without making each element of the stacked bar chart using svg, used the HTML5 <canvas> element."
            }
            <br />
            <br />
          </ArticleParagraph>
        </div>
        <div className="col-xs-20 col-sm-8 col-sm-offset-2">
          <ArticleParagraph>
            {
              "The HTML5 <canvas> element requires only one <canvas> element in an html document, which can dramatically reduce the DOM to be managed. Instead, d3 was used to determine the position, size, and color to draw the stacked bar chart on the canvas. In order to support user interaction with the chart data (eg brush) I've implemented the svg element in the <canvas> element (fake d3 element)."
            }
          </ArticleParagraph>
        </div>
      </div>
      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-18">
          <ArticleTitle>Brushing & Drilldown: Back and Forth</ArticleTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-6">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-15 col-sm-14 col-xs-offset-1 col-sm-offset-2 shadow-5">
          <video autoPlay muted playsInline loop class="ratio__img">
            <source src={brushingVideo} type="video/mp4" />
          </video>
        </div>
        <div className="col-xs-5 col-xs-offset-1">
          <ArticleParagraph>
            Stacked bar graph selection by brushing: only the type and weight of
            the keyword in selection are represented in the tree map.
          </ArticleParagraph>
        </div>
      </div>
      <div className="row bottom-xs">
        <div className="col-xs-5 col-xs-offset-2">
          <ArticleParagraph>
            Click word (duplicate selectable): Only the feeds corresponding to
            the selected word are displayed in the stacked bar graph.
          </ArticleParagraph>
        </div>
        <div
          className="col-xs-15 col-sm-14 col-xs-offset-1 shadow-5"
          style={{ marginTop: "-10vw" }}
        >
          <video autoPlay muted playsInline loop class="ratio__img">
            <source src={drilldownVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <ResponsiveGap />

      <div className="row middle-sm center-xs">
        <div className="col-xs-20 col-sm-11 col-md-8">
          <div className="idea">
            <div className="title title--orange">Meem parser</div>
            <ArticleParagraph className="desc desc--below">
              The problem was in the form of uncommon chat(Meem). Unlike
              sentences, which are usually written in complete form and
              spelling, chats were deliberately mislabeled or distorted in
              character. By implementing meme parser specifically in
              Korean(right figure), this system can extract feasible words more
              properly.
            </ArticleParagraph>
          </div>
        </div>

        <div className="col-xs-20 col-sm-9 col-sm-offset-1">
          <div className="row">
            <div
              className="col-xs-16 col-sm-20"
              style={{ marginBottom: "-4vw" }}
            >
              <img className="ratio__img" src={beforeLabeling} />
            </div>
          </div>
          <div className="row middle-xs">
            <div className="col-xs-3 col-sm-4 col-xs-offset-2">
              <img className="ratio__img" src={transitionArrow} />
            </div>
            <div className="col-xs-14 col-xs-offset-4 shadow-5">
              <video
                autoPlay
                muted
                playsInline
                loop
                class="ratio__img"
                style={{ position: "relative", zIndex: 10 }}
              >
                <source src={chatlogVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-16 col-sm-20" style={{ marginTop: "-4vw" }}>
              <img className="ratio__img" src={afterLabeling} />
            </div>
          </div>
        </div>
      </div>

      <div className="row center-xs start-sm">
        <div className="ratio--4-1" />
      </div>
    </React.Fragment>
  );
};

export default Preview;
