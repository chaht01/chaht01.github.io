import React from "react";
import styled from "styled-components";
import pxToVw from "../../Helper/pxToVw";
import media from "../../Helper/media";
import { css } from "styled-components";

const mainText = css`
  font-size: ${pxToVw(16)}vw;
  ${media.lg`
  font-size: ${pxToVw(20)}vw;
  `}
  ${media.md`
  font-size: ${pxToVw(28)}vw;
  `}
  ${media.sm`
  font-size: ${pxToVw(40)}vw;
  `}
`;

const subText = css`
font-size: ${pxToVw(14)}vw;
  ${media.lg`
  font-size: ${pxToVw(18)}vw;
  `}
  ${media.md`
  font-size: ${pxToVw(25)}vw;
  `}
  ${media.sm`
  font-size: ${pxToVw(36)}vw;
  `}
`;
const Logo = styled.div`
  ${mainText}
  font-family: "Montserrat", sans-serif;
`;
const Name = styled.div`
  ${mainText}
  font-family: "Source Sans Pro", sans-serif;
`;
const Desc = styled.div`
  ${subText}
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
`;

const ExpMaj = styled(Name)`
  margin-bottom: 0.5em;
`;
const ExpMin = styled(Desc)`
  color: #aaa;
  margin-bottom: 0.1em;
  & + & {
    margin-bottom: 1em;
  }
`;
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
  font-size: ${pxToVw(36)}vw;
  margin-top: 8vw;
`}
  ${media.sm`
  font-size: ${pxToVw(40)}vw;
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
  font-size: ${pxToVw(50.65)}vw;
  line-height: 1;
  margin-bottom: 3vw;
  font-weight: 100;
  ${media.md`
    font-size: ${pxToVw(60)}vw;
  `}
`;

const SectionDescription = styled.div`
  font-size: ${pxToVw(18)}vw;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;

  ${media.md`
  font-size: ${pxToVw(30)}vw;
`}
  ${media.sm`
  font-size: ${pxToVw(36)}vw;
`}
`;

const ArticleSubTitle = styled.div`
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: ${pxToVw(15)}vw;
  margin-bottom: 0.8em;
  ${media.md`
  font-size: ${pxToVw(24)}vw;
`}
  ${media.sm`
  font-size: ${pxToVw(28)}vw;
`}
`;

const ArticleTitle = styled.div`
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: ${pxToVw(30)}vw;
  line-height: 1;
  margin-bottom: 0.8em;

  ${media.md`
  font-size: ${pxToVw(50)}vw;
`}
  ${media.sm`
  font-size: ${pxToVw(60)}vw;
`}
`;
const ArticleParagraph = styled.div`
  font-size: ${pxToVw(14)}vw;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
  line-height: 1.4;

  ${media.md`
  font-size: ${pxToVw(30)}vw;
`}
  ${media.sm`
  font-size: ${pxToVw(36)}vw;
`}
`;

export {
  Logo,
  Name,
  Desc,
  ExpMaj,
  ExpMin,
  ProgramTitle,
  ProgramDescription,
  SectionDescription,
  SectionTitle,
  ArticleParagraph,
  ArticleTitle,
  ArticleSubTitle,
  DemoLink
};
