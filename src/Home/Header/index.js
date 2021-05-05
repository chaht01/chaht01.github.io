import React from 'react';
import styled from 'styled-components';
import pxToVw from '../../Helper/pxToVw';
import media from '../../Helper/media';
import { css } from 'styled-components';

const mainText = css`
  font-size: 20px;
  // font-size: ${pxToVw(16)}px;
  ${media.lg`
  // font-size: 20px;
  // font-size: ${pxToVw(20)}px;
  `}
  ${media.md`
  // font-size: 28px;
  // font-size: ${pxToVw(28)}px;
  `}
  ${media.sm`
  font-size: 16px;
  // font-size: 40px;
  // font-size: ${pxToVw(40)}px;
  `}
`;

const subText = css`
  font-size: 14px;
  // font-size: ${pxToVw(14)}px;
  ${media.lg`
  // font-size: 18px;
  // font-size: ${pxToVw(18)}px;
  `}
  ${media.md`
  // font-size: 25px;
  // font-size: ${pxToVw(25)}px;
  `}
  ${media.sm`
  // font-size: 36px;
  // font-size: ${pxToVw(36)}px;
  `}
`;
// const Logo = styled.div`
// 	font-size: 20px;
//   font-family: 'Montserrat', sans-serif;
//   font-weight: 500;
//   margin-bottom: 16px;
// 	${media.sm`
//     font-size: 16px;
//   `};
// `;
// const Name = styled.div`${mainText} font-family: "Source Sans Pro", sans-serif;`;
// const Desc = styled.div`
// 	${subText} font-family: "Source Sans Pro", sans-serif;
// 	font-weight: 100;
// `;

const ExpMaj = styled.div`
	${mainText} font-family: "Source Sans Pro", sans-serif;
	margin-bottom: 0.5em;
`;
const ExpMin = styled.div`
	${subText} font-family: "Source Sans Pro", sans-serif;
	font-weight: 100;
	color: #aaa;
	margin-bottom: 0.1em;
	& + & {
		margin-bottom: 1em;
	}
`;
const ProgramTitle = styled.div`
	font-size: ${pxToVw(64)}px;
	line-height: 1;
	@media only screen and (min-width: 640px) {
		font-size: ${pxToVw(55.22)}px;
		margin-top: 0;
	}
`;

const ProgramDescription = styled.div`
	font-size: ${pxToVw(18)}px;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 100;
	line-height: 1.6;

	${media.md`
  font-size: 36px;
  // font-size: ${pxToVw(36)}px;
  margin-top: 8vw;
`} ${media.sm`
  font-size: 40px;
  // font-size: ${pxToVw(40)}px;
  margin-top: 8vw;
`};
`;

const DemoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: 100;
  font-size: 30px;
  // font-size: ${pxToVw(30)}px;
  margin-top: 1em;
  background-image: linear-gradient(0deg, #fff 100%, #fff);
  background-size: 0 1px;
  background-position: 0 58%;
  background-repeat: no-repeat;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  transition: background-size 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  @media only screen and (min-width: 960px) {
    font-size: 18px;
    // font-size: ${pxToVw(18)}px;
  }

  &:hover {
    background-size: 100% 1px;
  }
`;

const SectionTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 50.65px;
  // font-size: ${pxToVw(50.65)}px;
  line-height: 1;
  margin-bottom: 3vw;
  font-weight: 100;
  ${media.md`
    font-size: 60px;
    // font-size: ${pxToVw(60)}px;
  `}
`;

const SectionDescription = styled.div`
  font-size: 18px;
  // font-size: ${pxToVw(18)}px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;

  ${media.md`
  font-size: 30px;
  // font-size: ${pxToVw(30)}px;
`}
  ${media.sm`
  font-size: 36px;
  // font-size: ${pxToVw(36)}px;
`}
`;

const ArticleSubTitle = styled.div`
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 15px;
  // font-size: ${pxToVw(15)}px;
  margin-bottom: 0.8em;
  ${media.md`
  font-size: 24px;
  // font-size: ${pxToVw(24)}px;
`}
  ${media.sm`
  font-size: 28px;
  // font-size: ${pxToVw(28)}px;
`}
`;

const ArticleTitle = styled.div`
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 30px;
  // font-size: ${pxToVw(30)}px;
  line-height: 1;
  margin-bottom: 0.8em;

  ${media.md`
  font-size: 50px;
  // font-size: ${pxToVw(50)}px;
`}
  ${media.sm`
  font-size: 60px;
  // font-size: ${pxToVw(60)}px;
`}
`;
const ArticleParagraph = styled.div`
  font-size: 14px;
  // font-size: ${pxToVw(14)}px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 100;
  line-height: 1.4;

  ${media.md`
  font-size: 30px;
  // font-size: ${pxToVw(30)}px;
`}
  ${media.sm`
  font-size: 36px;
  // font-size: ${pxToVw(36)}px;
`}
`;

export {
	// Logo,
	// Name,
	// Desc,
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
