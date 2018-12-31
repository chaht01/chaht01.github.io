import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import wall_ndf from "./img/project1.png";
import wall_conviot from "./img/project2.png";
import wall_twitch from "./img/twitch.mp4";
import wall_jiggle_fallback from "./img/jiggle_wall_fallback.mp4";
import pxToVw from "../Helper/pxToVw";

const WorkWall = styled.img`
  transition: transform 0.5s;
`;
const WorkWall_v = styled(WorkWall)`
  height: 100%;
  width: auto;
  transition: transform 0.5s;
`.withComponent("video");
const WorkDes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.5s;
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: ${pxToVw(65.7)}vw;
`;
const WorkItem = styled(Link)`
  display: ${props => (props.comp ? "none" : "block")};
  position: relative;
  width: 100%;
  padding-top: ${props =>
    props.shrink ? `${(100 / 3) * 1}%` : `${(100 / 1.618) * 1}%`};
  background: #f6f6f9;
  &:hover {
    ${WorkWall}, ${WorkWall_v} {
      transition: transform 0.5s;
      transform: scale(1.1);
    }
    ${WorkDes} {
      opacity: 1;
    }
  }
  ${props =>
    props.shrink
      ? `
    & ${WorkWall}, ${WorkWall_v} {
      width: 100%;
      height: auto;
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      transition: transform 0.5s;
    }
    &:hover {
      ${WorkWall}, ${WorkWall_v} {
        transition: transform 0.5s;
        transform: scale(1.1) translate(0, -50%);
      }

    }
  `
      : null}
`;

const WorkLink = ({ location, shrink = false }) => {
  return [
    <WorkItem
      to="/jiggle"
      comp={location.pathname == "/jiggle"}
      shrink={shrink}
    >
      <div className="ratio__inner">
        <WorkWall_v autoPlay={true} muted={true} playsInline={true} loop={true}>
          <source src={wall_jiggle_fallback} type="video/mp4" />
        </WorkWall_v>
      </div>
      <WorkDes className="ratio__inner">Jiggle</WorkDes>
    </WorkItem>,
    <WorkItem
      to="/twitch"
      comp={location.pathname == "/twitch"}
      shrink={shrink}
    >
      <div className="ratio__inner">
        <WorkWall_v autoPlay muted playsInline loop>
          <source src={wall_twitch} type="video/mp4" />
        </WorkWall_v>
      </div>
      <WorkDes className="ratio__inner">Twitch Chat Visualization</WorkDes>
    </WorkItem>,
    <WorkItem to="/NDF" comp={location.pathname == "/NDF"} shrink={shrink}>
      <div className="ratio__inner">
        <WorkWall className="ratio__img" src={wall_ndf} alt="" />
      </div>
      <WorkDes className="ratio__inner">Naver Design Fellowship</WorkDes>
    </WorkItem>,
    <WorkItem
      to="/CONVIoT"
      comp={location.pathname == "/CONVIoT"}
      shrink={shrink}
    >
      <div className="ratio__inner">
        <WorkWall className="ratio__img" src={wall_conviot} alt="" />
      </div>
      <WorkDes className="ratio__inner">CONVIoT</WorkDes>
    </WorkItem>
  ];
};
const Works = withRouter(props => <WorkLink {...props} />);
export default Works;
