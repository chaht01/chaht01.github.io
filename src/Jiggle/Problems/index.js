import React from "react";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle
} from "../Header";
import interviewO0 from "./img/interview_o0.png";
import interviewO1 from "./img/interview_o1.png";
import interviewO2 from "./img/interview_o2.png";
import chart1 from "./img/chart_2.gif";
import chart2 from "./img/chart_1.gif";
import blackChart from "./img/black chart.png";
import problemGraph from "./img/problem_graph.png";
import styled, { css } from "styled-components";
import { colors } from "../var";
import pxToVw from "../../Helper/pxToVw";

const interviewFont = css`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
`;

const Mention = styled.div`
  ${interviewFont}
  font-style: italic;
  position: relative;
  padding: 1em 2em;
  font-size: ${pxToVw(28)}vw;
  color: #abaefb;
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(16)}vw;
    padding: 1em;
  }
  &:before,
  &:after {
    position: absolute;
    content: '"';
    display: inline-block;

    opacity: 0.3;
    font-size: ${pxToVw(70)}vw;
    @media only screen and (min-width: 960px) {
      font-size: ${pxToVw(30)}vw;
    }
  }
  &:before {
    left: 0.2em;
    top: 0;
    @media only screen and (min-width: 960px) {
      left: 0;
    }
  }
  &:after {
    right: 0.5em;
    top: 0;
    @media only screen and (min-width: 960px) {
      right: 0;
    }
  }
`;

const Interviewee = styled.div`
  ${interviewFont}
  opacity: 0.8;
  margin-top: 0.5em;
`;

const Insight = styled.div`
  ${interviewFont}
  text-align: left;
  font-size: ${pxToVw(24)}vw;
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(14)}vw;
  }
  &:before{
    content: "Insight 0${props => props.index}";
    font-weight: bold;
    display:block;
    margin-bottom: 1em;
  }
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

const Interview = ({
  img,
  mention,
  interviewee: _interviewee,
  index,
  insight: _insight
}) => {
  let parse = str => {
    return str
      ? str.split("<br/>").map(line => (
          <span>
            {line}
            <br />
          </span>
        ))
      : "";
  };

  let interviewee = parse(_interviewee);
  let insight = parse(_insight);
  return (
    <React.Fragment>
      <div className="row center-xs middle-xs">
        <div className="col-xs-22 col-md-12">
          <Mention>{mention}</Mention>
        </div>
      </div>
      <div className="row center-xs middle-xs">
        <div className="col-xs-6 col-md-3 col-md-offset-1">
          <img className="ratio__img" src={img} />
          <Interviewee>{interviewee}</Interviewee>
        </div>
        <div className="col-xs-14 col-md-6 col-xs-offset-1">
          <Insight index={index}>{insight}</Insight>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="ratio--4-1" />
        </div>
      </div>
    </React.Fragment>
  );
};

const Problems = () => {
  return (
    <Container>
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Current Status Analysis</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-16 col-md-12">
          <SectionDescription>
            At a first glance, it seems right to make an assumption like "There
            must be some troubles or obstacles to make the new type of media for
            the journalist". Figuring out the cause of this problem from
            journalist can be effective to find the solution because eventually,
            every chart on the press must be reviewed by them.
            <br />
            <br />
            So we started interviewing 7 journalists, 3 designers and one
            developer in many media companies. From this interviewing, we knew
            this problem should be analyzed both microscopic and macroscopic
            perspectives.
          </SectionDescription>
        </div>
      </div>
      <div className="row">
        <div class="col-xs-6">
          <div class="ratio--2-1" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs">
          <ArticleTitle>Microscopic Analysis</ArticleTitle>
        </div>
      </div>
      <div className="row">
        <div class="col-xs-6">
          <div class="ratio--4-1" />
        </div>
      </div>
      <Interview
        img={interviewO0}
        index={1}
        mention={`It takes 30 to 90 minutes to pass the data and receive the
            visualized data again. It is quite harsh to demand faster worker,
            but I have to wait for the designer to work on the order.`}
        interviewee={`Journalist Sunmi Kang <br/> from Money Today`}
        insight={`All charts in online news are created through designers. But they
            have a desire to make the charts by themselves.<br/><br/>However, this process was taking too much time. Reporters need to
            organize their data and deliver it to designers, and designers are
            overloaded with too much work and requirements. And if the visual
            materials created by designers are not completely in mind, they may
            have difficulty communicating with each other.`}
      />
      <Interview
        img={interviewO1}
        index={2}
        mention={`When the chart received from the designer
      is not what I had in mind, we have to wait
      again for the order. So it would be very nice
      if I could create visual materials myself.`}
        interviewee={`Journalist Hyukjin Oh<br/>
      from Korea Securities Press`}
        insight={`Journalists who are interested in new media
      feel the need for dynamic charts. They think
      static charts are no longer helpful for story-
      telling and information delivery.<br/><br/>Journalists in Korea also want to create dynamic
      charts and articles in a variety of formats, such as
      those provided by The New York Times or Bloom-
      berg. However, most Koreans get their news
      through portals, and portals have put a lot of
      limitations on media companies, so reporters
      cannot attempt to provide new and forward-
      thinking designs. The formats that can be uploaded
      to portal sites are all text, images, and YouTube links.`}
      />
      <Interview
        img={interviewO2}
        index={3}
        mention={`Static charts do not help storytelling. But
        I was afraid of the tool and did not think
        about trying it.`}
        interviewee={`Journalist Heegun Lee<br/>
        from Mun-Hwa Daily Press`}
        insight={`Most journalists have little experience with tools
        and are afraid to learn new tools. Also, they have
        to complete articles by deadlines every day, so
        they always lack time.<br/><br/>In fact, there are many services that reporters can
        create dynamic tools. But most reporters who have
        difficulty learning new things feel that the services are
        also difficult. They need a data tool that can provide
        some needed functionality and produce efficient
        results in a short amount of time.`}
      />
      <ResponsiveGap />
      <div className="row center-xs">
        <div className="col-xs">
          <ArticleTitle>Macroscopic Analysis</ArticleTitle>
        </div>
      </div>
      <div className="row">
        <div class="col-xs-6">
          <div class="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-18 col-md-8">
          <div className="row center-xs">
            <div className="col-xs-24">
              <img className="ratio__img shadow-1" src={chart1} />
            </div>
            <div className="row center-xs">
              <ArticleParagraph>
                Digital news consumption rate through portal site by country
              </ArticleParagraph>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="ratio--4-1" />
            </div>
          </div>
        </div>
        <div className="col-xs-18 col-md-8 col-md-offset-1">
          <div className="row center-xs">
            <div className="col-xs-24">
              <img className="ratio__img shadow-1" src={chart2} />
            </div>
            <div className="col-xs-24">
              <ArticleParagraph>
                Digital news consumption rate through media homepage by country
              </ArticleParagraph>
            </div>
            <div className="col-xs-12">
              <div className="ratio--4-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-20 col-sm-16 col-md-14">
          <ArticleParagraph>
            From these two charts, 77% of reader visit portal sites to read the
            news and only 4% of reader visit the press' websites to read.
            Compare to other nations, the dependency is too concentrated only on
            portal sites in Korea. In reality, many people in Korea read news
            through portal sites like "Naver" or "Daum" and even worse, some of
            them regard portal sites as the press.
          </ArticleParagraph>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-24 col-md-14">
          <img className="ratio__img" src={problemGraph} />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-20 col-sm-16 col-md-14">
          <ArticleParagraph>
            This can be a serious cause of our problem. Because of high traffic
            of portal sites, the press has no choice but to publish their news
            to portal services. In this process, the press must adjust the
            format of their content to be received and as a result, they cannot
            use any dynamic scripting on their contents. It makes contents less
            flexible and experimental. This is the main reason why we still see
            static and old type contents.
          </ArticleParagraph>
        </div>
      </div>
      <ResponsiveGap />
    </Container>
  );
};

export default Problems;
