import React from 'react';
import styled from 'styled-components';
import pxToVw from '../../Helper/pxToVw';
import media from '../../Helper/media';
const ProgramTitle = styled.div`
	font-size: ${pxToVw(64)}px;
	line-height: 1;
	${media.md`
    font-size: 48px;
    // margin-top: 1em;
  `};
	${media.sm`
    font-size: 32px;
    // margin-top: 1em;
  `};
`;

const ProgramDescription = styled.div`
	font-size: ${pxToVw(18)}px;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 100;
	line-height: 1.6;

	${media.md`
  font-size: ${pxToVw(16)}px;
  margin-top: 1em;
`} ${media.sm`
  font-size: ${pxToVw(16)}px;
  margin-top: 1em;
`};
`;

const DemoLink = styled.a`
	display: inline-block;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	font-weight: 100;
	font-size: ${pxToVw(30)}px;
	margin-top: 1em;
	background-image: linear-gradient(0deg, #fff 100%, #fff);
	background-size: 0 1px;
	background-position: 0 58%;
	background-repeat: no-repeat;
	-webkit-transform-origin: left bottom;
	transform-origin: left bottom;
	transition: background-size 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	${media.md`
    font-size: ${pxToVw(16)}px;
  `} ${media.sm`
    font-size: ${pxToVw(14)}px;
  `};

	&:hover {
		background-size: 100% 1px;
	}
`;

const SectionTitle = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-size: ${pxToVw(50.65)}px;
	line-height: 1;
	margin-bottom: 1em;
	font-weight: 100;
	${media.md`
    font-size: 40px
  `};
	${media.sm`
    font-size: 30px
  `};
`;

const SectionDescription = styled.div`
	font-size: ${pxToVw(18)}px;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 100;

	${media.md`
    font-size: 16px
  `};
	${media.sm`
    font-size: 16px
  `};
`;

const ArticleTitle = styled.div`
	display: block;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: ${pxToVw(20)}px;
	margin-bottom: 0.8em;
	${media.md`
    font-size: 18px
  `};
	${media.sm`
    font-size: 16px
  `};
`;
const ArticleParagraph = styled.div`
	font-size: ${pxToVw(16)}px;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 100;
	line-height: 1.4;
	${media.md`
  font-size: ${pxToVw(16)}px;
`} ${media.sm`
  font-size: ${pxToVw(16)}px;
`};
`;

export { ProgramTitle, ProgramDescription, SectionDescription, SectionTitle, ArticleParagraph, ArticleTitle, DemoLink };
