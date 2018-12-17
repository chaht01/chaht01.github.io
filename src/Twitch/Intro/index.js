import React from "react";
import Wallpaper from "../Wallpaper";
import topic_napp from "./img/napp.png";
import topic_nstudio from "./img/studio.png";
import topic_ni from "./img/naveri.png";
import topic_neditor from "./img/smarteditor.png";
import topic_nkeyboard from "./img/nkeyboard.png";
import topic_nradio from "./img/nradio.png";
import topic_ncafe from "./img/ncafe.png";
import topic_nlive from "./img/nlive.png";
import * as styled from "styled-components";

const Intro = () => {
  return (
    <div>
      <div className="row center-xs middle-xs full-height">
        <div className="col-xs">
          <div className="row center-xs start-md">
            <div className="col-xs-24 col-md-6 col-md-offset-3">
              <div className="program__title">Twitch</div>
              <div className="program__title">Chat</div>
              <div className="program__title">Visualize</div>
            </div>
            <div className="col-xs-16 col-md-11 col-md-offset-1">
              <div className="program__description">
                Naver had managed UXDP, design internship/educating program.
                Naver restarts their program as Naver Design Fellowship (NDF) by
                redefining definition of ‘design’ as a constructing service
                system not as beautifying visual illustration. NDF is a program
                that nurtures talented students in design. For ten weeks, 8
                participants challenge 8 actual design issues of Naver services
                that involves many different departments of the company and our
                own design outcomes are presented and feedbacks are shared and
                reflected. For this ten weeks of studying, I have identified
                problems, specified the ideas and implemented with prototypes.
                And now I would like to share three of the top most self-valued
                project as ‘The project of this week’.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-20 col-md-18 col-xs-offset-2 col-md-offset-3">
          <Wallpaper />
          <div className="ratio--3-1" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5 col-md-5">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_napp} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_nstudio} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_ni} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_neditor} />
            </div>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-8 col-md-8">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_nkeyboard} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_nradio} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_ncafe} />
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-1 col-md-offset-1">
          <div className="topics shadow--hard">
            <div className="ratio__inner">
              <img className="ratio__img" src={topic_nlive} />
            </div>
          </div>
        </div>
      </div>
      <div className="block-hide block-show-sm">
        <div className="row">
          <div className="ratio--4-1">
            <div className="ratio__inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
