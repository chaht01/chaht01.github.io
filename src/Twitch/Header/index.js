import React from "react";
import styled from "styled-components";
import pxToVw from "../../Helper/pxToVw";
import media from "../../Helper/media";
const ProgramTitle = styled.div`
  font-size: ${pxToVw(64)}vw;
  line-height: 1;
  @media only screen and (min-width: 640px) {
    font-size: ${pxToVw(55.22)}vw;
    margin-top: 0;
  }
`;

const ProgramDescription = styled.div`
  font-size: ${pxToVw(18)}vw;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
  line-height: 1.6;

  ${media.md`
  font-size: ${pxToVw(24)}vw;
  margin-top: 8vw;
`}
  ${media.sm`
  font-size: ${pxToVw(30)}vw;
  margin-top: 8vw;
`}
`;

const DemoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: 100;
  font-size: ${pxToVw(30)}vw;
  margin-top: 1em;
  background-image: linear-gradient(0deg, #fff 100%, #fff);
  background-size: 0 1px;
  background-position: 0 58%;
  background-repeat: no-repeat;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  transition: background-size 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(18)}vw;
  }

  &:hover {
    background-size: 100% 1px;
  }
`;

const SectionTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: ${pxToVw(60)}vw;
  line-height: 1;
  margin-bottom: 3vw;
  font-weight: 100;
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(50.65)}vw;
  }
`;

const SectionDescription = styled.div`
  font-size: ${pxToVw(30)}vw;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;

  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(18)}vw;
  }
`;

const ArticleTitle = styled.div`
  display: block;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-size: ${pxToVw(50)}vw;
  line-height: 1;
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(30)}vw;
  }
`;
const ArticleParagraph = styled.div`
  font-size: ${pxToVw(36)}vw;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
  line-height: 1.4;
  @media only screen and (min-width: 960px) {
    font-size: ${pxToVw(18)}vw;
  }
`;

export {
  ProgramTitle,
  ProgramDescription,
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle,
  DemoLink
};
