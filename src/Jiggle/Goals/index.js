import React from 'react';
import { SectionDescription, SectionTitle, ArticleParagraph, ArticleTitle } from '../Header';
import styled, { css } from 'styled-components';
import pxToVw from '../../Helper/pxToVw';
import media from '../../Helper/media';
import { colors } from '../var';

const GoalFigure = styled.div`
position: relative;
  width: 30%;
  padding-top: 30%;
  margin: 0 auto;
  border-radius: 100%;
  color: #fff;
  background: ${colors.black};
  font-family: "Montserrat", sans-serif;
  ${media.sm`
    width: 10%;
    padding-top: 10%;
    margin-top: 10%;
  `};
  &:after{
    content: "${props => props.index}";
    font-size: 14px;
    position: absolute;
    left: 50%;
    display: block;
    top: 50%;
    transform: translate(-50%, -50%);
  }

`;

const GoalLabel = styled.div`
	font-family: 'Source Sans Pro', sans-serif;
	font-size: ${pxToVw(30)}px;
	margin-top: 1em;
	${media.sm`
    margin-top: 0;
  `};
`;
const GoalDes = styled.div`
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 100;
	margin-top: 2em;
	font-size: ${pxToVw(24)}px;
	${media.md`
    font-size: 15px;
    padding: 1em;
  `};
	${media.sm`
    font-size: 15px;
    margin-top: 0;
  `};
`;

const HMW = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${colors.black};
	color: ${colors.semiwhite};
	padding: 1em 0;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 400;
	font-size: ${pxToVw(45)}px;
	${media.md`
    font-size: 20px;
    padding: 1em;
  `};
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

const Goals = () => {
	return (
		<React.Fragment>
			<ResponsiveGap />
			<div className="row center-xs">
				<div className="col-xs">
					<SectionTitle>Goals</SectionTitle>
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-22 col-sm-16 col-md-12">
					<SectionDescription>
						From those lessons above, it's possible to set up goals to step into the design phase. The
						microscopic analysis could give us a direct approach to help them make the new type of media
						contents. In contrast, Macroscopic analysis means our problem should be approached as a
						platform/system problem. These 3 goals below inclusively regard both microscopic and macroscopic
						analysis.
					</SectionDescription>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<div className="ratio--4-1" />
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-24 col-sm-7 col-md-6">
					<GoalFigure index={'01'} />
					<GoalLabel>Without Designer</GoalLabel>
					<GoalDes>
						A journalist wants to make their own contents without a designer. Main obstacles are (1)
						<u>it must take less time than the case when designer do the same thing</u> and (2){' '}
						<u>has to be easy to learn</u>.
					</GoalDes>
				</div>
				<div className="col-xs-24 col-sm-7 col-md-6 col-sm-offset-1">
					<GoalFigure index={'02'} />
					<GoalLabel>Familiar</GoalLabel>
					<GoalDes>
						To use easily and in a friendly way, every detail work process should be familiar with what
						they've done before. For this reason, there need to observe every step to publish news within
						chart from scratch.
					</GoalDes>
				</div>
				<div className="col-xs-24 col-sm-7 col-md-6 col-sm-offset-1">
					<GoalFigure index={'03'} />
					<GoalLabel>Cross Platform</GoalLabel>
					<GoalDes>
						The other but possible main reason about why this problem exists especially in Korea is the
						dependency on portal sites. Changing public reading source from portal to the press' site must
						be costly. Rather than this, our design should suggest available everywhere.
					</GoalDes>
				</div>
			</div>

			<div className="row">
				<div className="col-xs-12">
					<div className="ratio--4-1" />
				</div>
			</div>
			<div className="row center-xs">
				<div className="col-xs-24">
					<HMW>
						How might we help journalist making
						<br /> a narrative chart with minimum learning cost?
					</HMW>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Goals;
