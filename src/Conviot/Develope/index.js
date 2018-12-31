import React from "react";

import line1to2 from "./img/1to2.png";
import line2to3 from "./img/2to3.png";
import card_action from "./img/card_action.png";
import card_condition from "./img/card_condition.png";
import diagram from "./img/diagram.png";
import card_app from "./img/card_app.png";
import meta from "./img/meta.png";
import number from "./img/number.png";
import string from "./img/string.png";
import transition1 from "./img/transition1.png";
import transition2 from "./img/transition2.png";
import transition3 from "./img/transition3.png";
import pageMain from "./img/wallpaper.png";

import input_condition from "./video/condition_input.mp4";
import input_action from "./video/action_input.mp4";
import transition_effect from "./video/transition.mp4";

const style = {
  pageMain: {
    top: "-3.8vw"
  },
  condition_card: {
    marginTop: "-62vw"
  },
  action_card: {
    marginTop: "3vw"
  },
  applet_card: {
    marginTop: "3vw"
  },
  action_input: {
    marginLeft: "-6vw",
    zIndex: 1
  },
  transition_row: {
    marginTop: "-20vw",
    marginBottom: "20vw"
  }
};

const Develope = () => {
  return (
    <div>
      <div className="ratio--2-1">
        <div className="row middle-xs ratio__inner">
          <div className="col-xs">
            <div className="row center-xs">
              <div className="col-xs">
                <div className="section__title">Develop</div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12 col-md-12">
                <div className="section__description">
                  For the user to access platform easily, many aspects of
                  functions need to be hidden. It means convenient service makes
                  the user think what they can do, not how to do. To achieve
                  this goal, I developed with two principles - scalability and
                  explainability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-24 col-md-24">
          <div id="pageMainBg">
            <div className="ratio__inner">
              <svg width="100%" height="100%" viewBox="0 0 2400 1000">
                <defs>
                  <linearGradient
                    id="pageMainGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="2049.6487"
                    y1="-351.3515"
                    x2="352.3516"
                    y2="1345.9456"
                  >
                    <stop offset="0" style={{ stopColor: "#41B3CA" }} />
                    <stop offset="1" style={{ stopColor: "#6451D0" }} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#pageMainGradient)"
                  d="M2401,994.594c0,0-400-199.084-1200-199.084S1,994.594,1,994.594V0h2400V994.594z"
                />
              </svg>
            </div>
            <div className="ratio__inner ratio__inner--overflow">
              <div className="row center-xs" style={style.pageMain}>
                <div className="col-xs-16 col-md-16">
                  <img className="ratio__img" src={pageMain} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-6 col-md-6">
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="row center-xs">
        <div className="col-xs-24 col-md-24">
          <div className="article__title">Make procedure</div>
          <div className="article__title">clear & simple</div>
        </div>
        <div className="col-xs-2 col-md-2">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-10 col-md-10">
          <img className="ratio__img" src={diagram} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-11 col-md-11 col-xs-offset-9 col-md-offset-9">
          <div className="ratio--2-1" />
          <img className="ratio__img" src={line1to2} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-md-10 col-xs-offset-4 col-md-offset-4">
          <img className="ratio__img" src={line2to3} alt="" />
        </div>
      </div>
      <div className="row" style={style.condition_card}>
        <div className="col-xs-9 col-md-9 col-xs-offset-4 col-md-offset-4">
          <img className="ratio__img card shadow" src={card_condition} alt="" />
        </div>
      </div>
      <div className="row" style={style.action_card}>
        <div className="col-xs-9 col-md-9 col-xs-offset-11 col-md-offset-11">
          <img className="ratio__img card shadow" src={card_action} alt="" />
        </div>
      </div>
      <div className="row center-xs" style={style.applet_card}>
        <div className="col-xs-6 col-md-6">
          <img className="ratio__img card shadow" src={card_app} alt="" />
        </div>
      </div>

      <div className="ratio--4-1" />

      <div className="row center-xs">
        <div className="col-xs-24 col-md-24">
          <div className="article__title">Design User Input Interaction</div>
        </div>
        <div className="col-xs-12 col-md-12">
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="develope_bg">
        <div className="ratio__inner">
          <svg width="100%" height="100%" viewBox="0 0 1000 692.5">
            <polygon fill="#ececf0" points="0,0 0,442.5 1000,692.5 1000,0" />
          </svg>
        </div>
      </div>
      <div className="row middle-xs">
        <div className="col-xs-9 col-md-9 col-xs-offset-4 col-md-offset-4">
          <div className="row center-xs">
            <div className="article__title component_title">Condition</div>
            <div className="condition_input shadow">
              <div className="ratio__inner">
                <video
                  className="ratio__img"
                  autoPlay
                  playsInline=""
                  muted=""
                  loop
                  poster=""
                >
                  <source type="video/mp4" src={input_condition} />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5 col-xs-offset-2 col-md-offset-2">
          <div className="ratio--4-1" />
          <img className="ratio__img" src={number} alt="" />
          <div className="ratio--4-1" />
          <img className="ratio__img" src={string} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-8 col-md-8">
          <div className="ratio--4-1" />
        </div>
      </div>
      <div className="row bottom-xs">
        <div className="col-xs-9 col-md-9 col-xs-offset-7 col-md-offset-7">
          <div className="row center-xs">
            <div className="article__title component_title">Action</div>
            <div className="action_input shadow">
              <div className="ratio__inner">
                <video
                  className="ratio__img"
                  autoPlay
                  playsInline=""
                  muted=""
                  loop
                  poster=""
                >
                  <source type="video/mp4" src={input_action} />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-5" style={style.action_input}>
          <img className="ratio__img" src={meta} alt="" />
          <div className="ratio--4-1" />
        </div>
      </div>

      <div className="ratio--4-1" />
      <div className="row">
        <div className="col-xs-8 col-md-8 col-xs-offset-3 col-md-offset-3">
          <div className="transition_effect shadow">
            <div className="ratio__inner">
              <video
                className="ratio__img shadow"
                autoPlay
                playsInline=""
                muted=""
                loop
                poster=""
              >
                <source type="video/mp4" src={transition_effect} />
              </video>
            </div>
          </div>
        </div>
        <div className="col-xs col-xs-offset-1 col-md-offset-1">
          <div className="article__title">Oriented transition effect</div>
        </div>
      </div>
      <div className="row" style={style.transition_row}>
        <div className="col-xs-10 col-md-10 col-xs-offset-9 col-md-offset-9 transition_card">
          <img className="ratio__img" src={transition1} alt="" />
        </div>
        <div className="col-xs-10 col-md-10 col-xs-offset-9 col-md-offset-9 transition_card">
          <img className="ratio__img" src={transition2} alt="" />
        </div>
        <div className="col-xs-10 col-md-10 col-xs-offset-9 col-md-offset-9 transition_card">
          <img className="ratio__img" src={transition3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Develope;
