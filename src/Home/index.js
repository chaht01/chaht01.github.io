import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import _ from "lodash";
import wall_ndf from "./img/project1.png";
import wall_conviot from "./img/project2.png";
import profile from "./img/profile.jpg";
import "./home.css";
import scrollIt from "../Helper/scrollIt";

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
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <span
                  id="name"
                  onClick={e => {
                    e.preventDefault();
                    this.handleScroll();
                  }}
                >
                  Hyuntak Cha
                </span>
              </div>
              <div className="col-xs-6 col-md-6 col-xs-offset-11 col-md-offset-11">
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
              <div className="col-xs-1 col-md-1">
                <div
                  id="logo"
                  onClick={e => {
                    e.preventDefault();
                    this.handleScroll();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="home" className="global-width">
          <div className="row bottom-xs">
            <div className="col-xs-4 col-md-4 col-xs-offset-4 col-md-offset-4">
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
            <div className="col-xs col-xs-offset-2 col-md-offset-2">
              <div className="homepage_paragraph">
                <div className="homepage_paragraph__title">
                  <div>Hyuntak Cha</div>
                  <div>Creative Developer</div>
                  <div>Seoul, Korea</div>
                </div>
                <div className="homepage_paragraph__dexcription">
                  <div>I create fun and inspirational works</div>
                  <div>to make people happy.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row homepage_feature__menu">
            <div className="col-xs-14 col-md-14 col-xs-offset-10 col-md-offset-10">
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
        </div>
        <div id="works" ref="works" className="global-width">
          <div className="row center-xs">
            <div className="col-xs-24 col-md-24">
              <Link to="/twitch" className="work_item">
                <div className="ratio__inner">
                  <img className="ratio__img work_wall" src={wall_ndf} alt="" />
                </div>
                <div className="ratio__inner work_des">
                  Twitch Chat Visualization
                </div>
              </Link>
              <Link to="/NDF" className="work_item">
                <div className="ratio__inner">
                  <img className="ratio__img work_wall" src={wall_ndf} alt="" />
                </div>
                <div className="ratio__inner work_des">
                  Naver Design Fellowship
                </div>
              </Link>
              <Link to="CONVIoT" className="work_item">
                <div className="ratio__inner">
                  <img
                    className="ratio__img work_wall"
                    src={wall_conviot}
                    alt=""
                  />
                </div>
                <div className="ratio__inner work_des">CONVIoT</div>
              </Link>
            </div>
          </div>
        </div>
        <div id="about" ref="about" className="global-width">
          <div className="ratio--4-1" />
          <div className="row center-xs">
            <div className="col-xs-4 col-md-4">
              <div className="about_profile">
                <div className="ratio__inner">
                  <img className="ratio__img" src={profile} alt="" />
                </div>
              </div>
              <div className="ratio--4-1" />
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-9 col-md-9">
              <div className="about_minor">
                <div>
                  Present Visual Insight by layering trivial things around us
                </div>
              </div>
              <div className="ratio--4-1" />
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-xs-3 col-md-3">
              <div className="row end-xs">
                <div className="about_row_title">Experience</div>
              </div>
            </div>
            <div className="col-xs-7 col-md-7 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <div className="about_row">
                  <div className="about_major">KIXLAB Summer Internship</div>
                  <div className="about_minor">
                    Research Intern, June 2018 - Aug 2018
                  </div>
                  <div className="about_major">Google Newslab Fellowship</div>
                  <div className="about_minor">
                    Developer & Presenter, Dec 2017 - Mar 2018
                  </div>
                  <div className="about_major">Naver Design Fellowship</div>
                  <div className="about_minor">
                    Design Trainee, May 2017 - June 2017
                  </div>
                  <div className="about_major">Naver D2 - CONVIoT</div>
                  <div className="about_minor">
                    Developer, Oct 2016 - Feb 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-3 col-md-3">
              <div className="row end-xs">
                <div className="about_row_title">Education</div>
              </div>
            </div>
            <div className="col-xs-7 col-md-7 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <div className="about_row">
                  <div className="about_major">Seoul National University</div>
                  <div className="about_minor">CSE, 2012 ~</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-3 col-md-3">
              <div className="row end-xs">
                <div className="about_row_title">Skills</div>
              </div>
            </div>
            <div className="col-xs-3 col-md-3 col-xs-offset-2 col-md-offset-2">
              <div className="row start-xs">
                <div className="about_major">Javascript</div>
              </div>
              <div className="row start-xs">
                <div className="about_major">FramerJS</div>
              </div>
              <div className="row start-xs">
                <div className="about_major">ReactJS</div>
              </div>
            </div>
            <div className="col-xs-3 col-md-3 col-xs-offset-1 col-md-offset-1">
              <div className="row start-xs">
                <div className="about_major">AngularJS</div>
              </div>
              <div className="row start-xs">
                <div className="about_major">Processing</div>
              </div>
              <div className="row start-xs">
                <div className="about_major">Three.js</div>
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
