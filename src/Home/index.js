import React, { Component } from "react";
import logo from "../logo.svg";
import github from "./img/GitHub-Mark.png";
import linkedin from "./img/In-Black-0p5in-R.png";
import { Link } from "react-router-dom";
import _ from "lodash";
import wall_jiggle from "./img/jiggle.mp4";
import profile from "./img/profile.jpg";
import logoShadow from "./img/logo_shadow.png";
import "./home.css";
import scrollIt from "../Helper/scrollIt";
import { Logo, Name, Desc, ExpMaj, ExpMin } from "./Header";
import Works from "../Works";
import styled from "styled-components";

const LogoShadow = styled.img`
  position: absolute;
  width: 20%;
  top: 78%;
  left: 44%;
  transform: perspective(500px) rotateX(41deg) rotateY(1deg) rotateZ(29deg)
    translate(-50%, -50%);
  mix-blend-mode: hard-light;
`;

const JiggleWallWrapper = styled.div`
  height: 100%;
  background: #f74c1e;
  mix-blend-mode: darken;
`;

const JiggleVideo = styled.video`
  width: 20%;
  position: relative;
  left: 42%;
  top: 50%;
  transform: perspective(500px) rotateX(10deg) rotateY(-10deg) rotateZ(20deg)
    translate(-50%, -50%);
  mix-blend-mode: multiply;
`;

const Resume = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  margin: 1em;
  background-image: linear-gradient(0deg, #111 100%, #111);
  background-size: 0 1px;
  background-position: 0 99%;
  background-repeat: no-repeat;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  transition: background-size 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-size: 100% 1px;
  }
`;

const OutlinkStyle = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.src});
  background-size: contain;
  opacity: 0.5;
  margin: 1em;
  transition: opacity 0.25s;
  &:hover {
    opacity: 1;
  }
`;
OutlinkStyle.Anchor = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Outlink = ({ src, name, path }) => {
  return (
    <OutlinkStyle src={src}>
      <OutlinkStyle.Anchor
        href={path}
        alt={name}
        target="_blank"
        rel="noopener noreferrer"
      />
    </OutlinkStyle>
  );
};

const JiggleWallFallback = () => {
  return (
    <JiggleWallWrapper className="work_wall">
      <LogoShadow src={logoShadow} />
      <JiggleVideo autoPlay muted playsInline loop className="ratio__img">
        <source src={wall_jiggle} type="video/mp4" />
      </JiggleVideo>
    </JiggleWallWrapper>
  );
};
const ResponsiveGap = () => {
  return (
    <div className="row">
      <div className="col-xs col-sm-12">
        <div className="ratio--2-1" />
      </div>
    </div>
  );
};

const Exp = ({ maj, min, dur }) => {
  return (
    <React.Fragment>
      <ExpMaj>{maj}</ExpMaj>
      <ExpMin>{min}</ExpMin>
      <ExpMin>{dur}</ExpMin>
    </React.Fragment>
  );
};
class Home extends Component {
  constructor() {
    super();
    this.state = {
      active: null
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.getOffset = this.getOffset.bind(this);
  }

  componentWillReceiveProps() {
    this.handleActive();
  }

  getOffset(elem) {
    let offset = {
      top: 0,
      left: 0
    };
    do {
      if (!isNaN(elem.offsetLeft)) {
        offset.left += elem.offsetLeft;
      }
      if (!isNaN(elem.offsetTop)) {
        offset.top += elem.offsetTop;
      }
    } while ((elem = elem.offsetParent));
    return offset;
  }

  handleScroll(ref) {
    ref = ref || document.getElementById("root");

    scrollIt(ref, 1000, "easeOutQuad");
  }

  handleActive(e) {
    if (this.refs) {
      let scrollTop = this.props.scrolltop;
      let isNull = true;
      let delta = 10;
      for (var ref in this.refs) {
        if (scrollTop >= this.getOffset(this.refs[ref]).top - delta) {
          isNull = false;
          this.setState({
            active: this.refs[ref]
          });
        }
      }
      if (isNull) {
        this.setState({
          active: null
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div id="header" className={this.state.active != null ? "active" : ""}>
          <div className="global-width">
            <div
              className="row middle-xs"
              style={{
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.8)"
              }}
            >
              <div className="col-xs-10 col-md-6 col-xs-offset-1">
                <Logo
                  onClick={e => {
                    e.preventDefault();
                    this.handleScroll();
                  }}
                >
                  Hyuntak Cha
                </Logo>
              </div>
              <div className="col-xs-12 col-sm-10 col-md-8">
                <div className="row middle-xs">
                  <div className="col-xs-20">
                    <ul className="homepage_feature__menu_lined homepage_feature__menu_lined--fixed">
                      <li
                        className={`homepage_feature__menu_item homepage_feature__menu_item--fixed ${
                          this.state.active == this.refs.works
                            ? "homepage_feature__menu_item--active"
                            : ""
                        }`}
                      >
                        <a
                          href="#works"
                          onClick={e => {
                            e.preventDefault();
                            this.handleScroll(this.refs.works);
                          }}
                        >
                          works
                        </a>
                      </li>
                      <li
                        className={`homepage_feature__menu_item homepage_feature__menu_item--fixed ${
                          this.state.active == this.refs.about
                            ? "homepage_feature__menu_item--active"
                            : ""
                        }`}
                      >
                        <a
                          href="#about"
                          onClick={e => {
                            e.preventDefault();
                            this.handleScroll(this.refs.about);
                          }}
                        >
                          about
                        </a>
                      </li>
                      <li className="homepage_feature__menu_item homepage_feature__menu_item--fixed">
                        <a href="mailTo:chaht01@gmail.com">contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home" className="global-width">
          <div className="row">
            <div className="col-xs col-sm-12 col-md-10 col-lg-8">
              <div className="ratio--2-1" />
            </div>
          </div>
          <div className="row bottom-xs">
            <div className="col-xs-6 col-sm-4 col-xs-offset-2 col-sm-offset-4">
              <div className="origami">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="origami__piece">
                    <div className="origami__inner">
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <polygon className="bg" points="0,0 0,100 100,100" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs col-xs-offset-2">
              <div className="homepage_paragraph">
                <div className="homepage_paragraph__title">
                  <Logo>Hyuntak Cha</Logo>

                  <Logo>Creative Developer</Logo>

                  <Logo>Seoul, Korea</Logo>
                </div>
                <div className="homepage_paragraph__dexcription">
                  <div>
                    <Desc>I create fun and inspirational works</Desc>
                  </div>
                  <div>
                    <Desc>to make people happy.</Desc>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row homepage_feature__menu">
            <div className="col-xs-14 col-xs-offset-10">
              <ul ref="menu" className="homepage_feature__menu_lined">
                <li className="homepage_feature__menu_item">
                  <a
                    href="#works"
                    onClick={e => {
                      e.preventDefault();
                      this.handleScroll(this.refs.works);
                    }}
                  >
                    works
                  </a>
                </li>
                <li className="homepage_feature__menu_item">
                  <a
                    href="#about"
                    onClick={e => {
                      e.preventDefault();
                      this.handleScroll(this.refs.about);
                    }}
                  >
                    about
                  </a>
                </li>
                <li className="homepage_feature__menu_item">
                  <a href="mailTo:chaht01@gmail.com">contact</a>
                </li>
              </ul>
            </div>
          </div>
          <ResponsiveGap />
        </div>
        <div id="works" ref="works" className="global-width">
          <div className="row center-xs">
            <div className="col-xs-24 col-md-24">
              <Works />
            </div>
          </div>
        </div>
        <div id="about" ref="about" className="global-width">
          <div className="ratio--4-1" />
          <div className="row center-xs">
            <div className="col-xs-8 col-sm-6 col-md-4">
              <div className="about_profile">
                <div className="ratio__inner">
                  <img className="ratio__img" src={profile} alt="" />
                </div>
              </div>
              <div className="ratio--4-1" />
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-24">
              <div className="about_minor">
                <Desc>
                  Present Visual Insights by layering trivial things around us
                </Desc>
              </div>
            </div>
            <div className="col-xs-24">
              <div className="row center-xs middle-xs">
                <Outlink
                  src={linkedin}
                  name="linkedin"
                  path="https://www.linkedin.com/in/chaht01/"
                />
                <Outlink
                  src={github}
                  name="github"
                  path="https://github.com/chaht01"
                />
                <Resume
                  alt="resume"
                  href="https://drive.google.com/file/d/1JBrCu2Re_gq0cdRjmvYSjVrfGEoACxa0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Resume>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 col-md-9">
              <div className="ratio--4-1" />
            </div>
          </div>

          <div className="row center-md">
            <div className="col-xs-7 col-sm-8 col-md-3">
              <div className="row end-xs">
                <Name>Experience</Name>
              </div>
            </div>
            <div className="col-xs-14 col-md-7 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <div className="about_row">
                  <Exp
                    maj={`KIXLAB Summer Internship`}
                    min={`Research Intern`}
                    dur={`June 2018 - Aug 2018`}
                  />
                  <Exp
                    maj={`Google Newslab Fellowship`}
                    min={`Developer & Presenter`}
                    dur={`Dec 2017 - Mar 2018`}
                  />
                  <Exp
                    maj={`Naver Design Fellowship`}
                    min={`Design Fellow`}
                    dur={`April 2017 - June 2017`}
                  />
                  <Exp
                    maj={`Naver D2 - CONVIoT`}
                    min={`Frontend Engineer`}
                    dur={`Oct 2016 - Feb 2017`}
                  />
                  <Exp
                    maj={`Military Service - ROKAF`}
                    min={`CERT`}
                    dur={`May 2015 - May 2017`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-8">
              <div className="ratio--4-1" />
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-xs-7 col-sm-8 col-md-3">
              <div className="row end-xs">
                <Name>Education</Name>
              </div>
            </div>
            <div className="col-xs-14 col-md-7 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <div className="about_row">
                  <Exp
                    maj={`Seoul National University`}
                    min={`Computer Science and Engineering`}
                    dur={`2012.3 ~ 2019.2`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="ratio--4-1" />
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-7 col-sm-8 col-md-3">
              <div className="row end-xs">
                <Name>Skills</Name>
              </div>
            </div>
            <div className="col-xs-6 col-md-3 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <Name>Javascript</Name>
              </div>
              <div className="row start-xs">
                <Name>FramerJS</Name>
              </div>
              <div className="row start-xs">
                <Name>ReactJS</Name>
              </div>
            </div>
            <div className="col-xs-6 col-md-3 col-xs-offset-1 col-md-offset-1">
              <div className="row start-xs">
                <Name>Protopie</Name>
              </div>
              <div className="row start-xs">
                <Name>Processing</Name>
              </div>
              <div className="row start-xs">
                <Name>Three.js</Name>
              </div>
            </div>
          </div>
        </div>
        <div className="ratio--4-1" />
      </div>
    );
  }
}

export default Home;
