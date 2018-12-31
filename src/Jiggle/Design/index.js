import React from "react";
import {
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle,
  ArticleSubTitle
} from "../Header";
import personaBoard from "./img/crop_persona.png";
import persona_diagram from "./img/persona_diagram.png";
import persona_interview from "./img/persona_interview.png";
import proto1 from "./img/proto.png";
import tool_proficiency from "./img/tool_proficiency.png";
import templates from "./img/templates.png";
import pic1_1 from "./img/1_1.jpeg";
import pic1_2 from "./img/1_2.jpeg";
import pic1_3 from "./img/1_3.v1.jpeg";
import input_diagram from "./img/input_diagram.png";
import input_diagram2 from "./img/input_diagram2.png";
import input_cells from "./img/input_cells.png";
import input2_emp from "./img/input2_emp.png";
import styling from "./img/styling.png";
import navigation_flow from "./img/navigation_flow.png";
import nav_paper from "./img/nav_paper.png";
import scrollSection from "./img/SectionScroll.mp4";
import styled, { css } from "styled-components";
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

const Design = () => {
  return (
    <React.Fragment>
      <ResponsiveGap />
      <div className="row center-xs">
        <div className="col-xs">
          <SectionTitle>Design</SectionTitle>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <SectionDescription>
            Lack of experience about domain could lead solution unreasonable and
            wasteful. To avoid this situation, conducted iterative
            investigation, prototyping and interviewing to get feedback. Also to
            achieve our goals, we've made 4 important design decisions from
            iterations.
          </SectionDescription>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle />
              <ArticleTitle>Persona</ArticleTitle>
              <ArticleParagraph>
                Defining persona is classic but the most obvious way to make the
                problem clear. It is because persona rarely be changed as long
                as the definition of problem isn't changed. After arranging
                field research material, it was able to see our problem more in
                detail and finally start to make our persona. Based on
                interviewing and research from journalist, it was possible to
                find many traits of (1)who they might be, (2)what they need and
                (3)why they want it. Combining each type of traits and
                considering the fitness to our main problem, eventually got
                persona.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-10">
          <img className="ratio__img" src={personaBoard} />
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs">
          <img className="ratio__img" src={persona_diagram} />
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-20 col-sm-16 col-md-12">
          <img className="ratio__img shadow-2" src={persona_interview} />
        </div>
      </div>
      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle />
              <ArticleTitle>Prototyping</ArticleTitle>
              <ArticleParagraph>
                Without making in-app prototypes, conducting paper prototyping
                can be effective to grasp basic concept of the service. First
                our team start to drawing own solution individually. Comparing
                each drawing can show the differences and make each solution's
                benefit and flaw more clear. It is also possible to show detail
                interaction using paper. Doing these prevents making a rough
                consensus in decision making which would led changing from
                beginning.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>

      <SmallGap />

      <div className="row center-xs">
        <div className="col-xs-16 col-md-11">
          <div className="row center-xs">
            <div className="col-xs-12">
              <ProtoImgWrapper>
                <ProtoImg className="ratio__img" src={proto1} />
              </ProtoImgWrapper>
            </div>
            <div className="col-xs-10 col-xs-offset-1">
              <PicGrid>
                <ProtoImgWrapper>
                  <ProtoImg className="ratio__img" src={pic1_1} />
                </ProtoImgWrapper>
                <ProtoImgWrapper>
                  <ProtoImg className="ratio__img" src={pic1_2} />
                </ProtoImgWrapper>
              </PicGrid>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle />
              <ArticleTitle>Iterative A/B Testing</ArticleTitle>
              <ArticleParagraph>
                Although most of conflicting opinions could be resolved during
                the decision-making process, some of them were worth testing and
                receiving feedback from real users. Some A/B testing results
                shocked us as they were in opposition to our expectations. For
                example, we struggled with designing navigation flow and some
                other features as well. After some discussion and meetings, we
                asked the journalists and designers to choose one of the
                available options. To show them options which should be more
                robust than paper prototypes, we prepared videos and explained
                what task they should do with Jiggle. Without any additional
                instruction, we just observed them, watched their thinking
                process, and received feedback on the prototypes, and lastly, we
                learned that there were a lot of differences from our
                expectations. These facts would never have been known just from
                our discussions.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row">
        <div className="col-xs-24">
          <img className="ratio__img" src={pic1_3} />
        </div>
      </div>

      <ResponsiveGap />

      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle />
              <ArticleTitle>Tool Proficiency Analysis</ArticleTitle>
              <ArticleParagraph>
                What feature would be helpful or not? Different from our
                expectation and effort, most of our considerations and stuff
                would not that helpful. No matter how good a feature is, it is
                not a good feature if it does not fit the user level. The
                easiest way to know the user level is listing up the tools they
                use. Knowing how they use them would be better. To design our
                feature more practical for them and enter into detailed step, we
                observe what they use, and how they use to make their chart.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-18 col-sm-14 col-md-10">
          <img className="ratio__img" src={tool_proficiency} />
        </div>
      </div>

      <SmallGap />

      <ColorParagraph color={"#ffffff"}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-22 col-sm-12">
            <div className="row start-xs">
              <div className="col-xs">
                <ArticleSubTitle>Decision 01</ArticleSubTitle>
                <ArticleTitle>Chart Templates</ArticleTitle>
                <ArticleParagraph>
                  There have been already many types of chart. Each chart has
                  own purpose and requirements to show a result. But these
                  typical charts would not help current journalist making their
                  own message at all. We thought the chart should be animated as
                  well as redefined own types with respect to their intention.
                  We collected currently used chart images and classify them
                  with their shapes, intentions, and frequency. This
                  classification came out a new type of chart and we call it
                  'Template'. Template represent animation, shapes, and
                  intention itself. By defining like this, the journalist can
                  choose most proper one of them easily.
                </ArticleParagraph>
              </div>
            </div>
          </div>
        </div>
        <SmallGap />
      </ColorParagraph>

      <ColorParagraph color={colors.black}>
        <SmallGap />
        <div className="row center-xs">
          <div className="col-xs-24 col-sm-20 col-md-16">
            <img className="ratio__img" src={templates} />
          </div>
        </div>
        <SmallGap />
      </ColorParagraph>

      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Decision 02</ArticleSubTitle>
              <ArticleTitle>Inputs</ArticleTitle>
              <ArticleParagraph>
                What if we tried to force a user to input their data into our
                service in a different way from what they've done before? The
                familiar way cannot be changed easily and possibly costly.
                'Input data' is just such a case. Most of us already use many
                input shortcut and conventions even though the program
                continuously switched. We always move data from one to another
                using 'ctrl+c(copy)' and 'ctrl+v(paste)'. Also if there is the
                case should be undone, we press 'ctrl+z(undo)'. This is why
                knowing user's workflow and the familiar task is important to
                transfer user's environment from one to other places.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-12 col-md-6">
          <img className="ratio__img" src={input_diagram} />
        </div>
      </div>
      <SmallGap />
      <ColorParagraph color={"#37ce75"}>
        <div className="row center-xs">
          <div className="col-xs-20 col-md-12">
            <img className="ratio__img" src={input_cells} />
          </div>
        </div>
      </ColorParagraph>

      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleParagraph>
                'Cell-like' representation is really powerful user to utilize as
                many features as possible without any instruction. However,
                sometimes the degree of freedom while inputting data really make
                service handle data hard. In our case, it would be resolved with
                studying input data structure from practical and real example
                data. It is because we already make our chart template including
                intention.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-12 col-md-6">
          <img className="ratio__img" src={input_diagram2} />
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleParagraph>
                Especially, in the process of input, we handle the narrative
                part of chart template. The important point is this special and
                novel feature is not sudden. It is even familiar with a
                journalist because they've already highlighted some part/cell to
                emphasize before delivering to a designer. This valuable
                observation can save many design cost to inject new feature into
                typical representation.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <ColorParagraph color={colors.black}>
        <div className="row center-xs">
          <div className="col-xs-24">
            <img className="ratio__img" src={input2_emp} />
          </div>
        </div>
      </ColorParagraph>

      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Decision 03</ArticleSubTitle>
              <ArticleTitle>Styling</ArticleTitle>
              <ArticleParagraph>
                Although chart template is able to deliver a message, in many
                cases, there are needs for other resources(color, image, and
                font) to be fertile what the chart means. In reality, a chart
                has some additional images on the background for the purpose of
                explaining visually(we knew that it's one of DONT in
                visualization). However, most of the journalist suffer from lack
                of sense of design. So basic styling features
                (1)foreground/background color, (2)color(Similar/Contrast) and
                (3)image composer were designed to help journalist. In this
                process, the load of using feature minimized based on our design
                principle(Be familiar).
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-24 col-md-16">
          <img className="ratio__img" src={styling} />
        </div>
      </div>

      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleSubTitle>Decision 04</ArticleSubTitle>
              <ArticleTitle>Navigation</ArticleTitle>
              <ArticleParagraph>
                With the same feature and contents, the navigation can make a
                significant difference in the whole service. Structuring
                navigation can be a most important part so that listing up use
                cases as flow chart should be done before. This task can help us
                by answering these questions.
                <br />
                <br />
                <i>What type of task is required to do the next step?</i>
                <br />
                <i>What triggers the user to go back they've already done?</i>
                <br />
                <i>The relevance and frequency of each task really matter?</i>
                <br />
                <br />
                Based on this, we figure out the normal and reverse flow of our
                service and labeling each step with the trigger.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <ColorParagraph color={"#ffffff"}>
        <div className="row center-xs">
          <div className="col-xs-20 col-md-14">
            <img className="ratio__img" src={navigation_flow} />
          </div>
        </div>
      </ColorParagraph>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-22 col-sm-12">
          <div className="row start-xs">
            <div className="col-xs">
              <ArticleParagraph>
                With our 3 main decision (1)Chart Template, (2)Input and
                (3)Styling and navigation flow chart it results as designing
                scroll paging rather than pagination or page stacking. A user
                can know which direction they head to by transition and it makes
                he/she whole process more understandable. These were the main
                benefit of scroll paging so that we made a real app prototype
                for testing.
              </ArticleParagraph>
            </div>
          </div>
        </div>
      </div>
      <SmallGap />
      <div className="row center-xs">
        <div className="col-xs-16 col-md-12">
          <div className="row center-xs">
            <div className="col-xs-11">
              <img className="ratio__img" src={nav_paper} />
            </div>
            <div className="col-xs-11 col-xs-offset-1">
              <video
                autoPlay
                muted
                playsInline
                loop
                className="ratio__img shadow-5"
              >
                <source src={scrollSection} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveGap />
    </React.Fragment>
  );
};

export default Design;

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/t5W0OjdfIqI?start=4102"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>;
