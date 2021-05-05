import React from 'react';
import styled from 'styled-components';
import ChatTransitionMp4 from './img/intro_bg_mobile.mp4';
import ChatTransition from './bg';
import { colors } from '../var';
import { ProgramTitle, ProgramDescription, DemoLink } from '../Header';
const VideoWrapper = styled.div`
	width: 100%;
	padding-top: ${100 / 1.618}%;
	position: relative;
	& > iframe {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
`;

const GradientDim = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	background: rgba(17, 17, 17, 1);
	background: -moz-linear-gradient(top, rgba(17, 17, 17, 1) 0%, rgba(237, 237, 237, 0) 100%);
	background: -webkit-gradient(
		left top,
		left bottom,
		color-stop(0%, rgba(17, 17, 17, 1)),
		color-stop(100%, rgba(237, 237, 237, 0))
	);
	background: -webkit-linear-gradient(top, rgba(17, 17, 17, 1) 0%, rgba(237, 237, 237, 0) 100%);
	background: -o-linear-gradient(top, rgba(17, 17, 17, 1) 0%, rgba(237, 237, 237, 0) 100%);
	background: -ms-linear-gradient(top, rgba(17, 17, 17, 1) 0%, rgba(237, 237, 237, 0) 100%);
	background: linear-gradient(to bottom, rgba(17, 17, 17, 1) 0%, rgba(237, 237, 237, 0) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#111111', endColorstr='#ededed', GradientType=0);
`;
const IntroContainer = styled.div`
	background: ${colors.semiblack};
	color: ${colors.semiwhite};
`;

const IntroUI = () => {
	const isMobile = window.mobilecheck();
	return (
		<IntroContainer>
			<div className="row center-xs middle-xs full-height">
				{isMobile ? (
					<video
						autoPlay
						muted
						playsInline
						loop
						id="myVideo"
						style={{ width: '100%', position: 'absolute', left: 0, top: '50%' }}
					>
						<source src={ChatTransitionMp4} type="video/mp4" />
					</video>
				) : (
					<ChatTransition />
				)}
				<GradientDim />
				<div className="col-xs" style={{ margin: 'auto' }}>
					<div className="row center-xs start-md">
						<div className="col-xs-24 col-md-6 col-md-offset-3">
							<ProgramTitle>Twitch</ProgramTitle>
							<ProgramTitle>Chat</ProgramTitle>
							<ProgramTitle>Visualization</ProgramTitle>
							<DemoLink href="http://twitch.hyuntak.com/" target="_blank" rel="noopener noreferrer">
								Visit Demo
							</DemoLink>
						</div>
						<div className="col-xs-20 col-sm-16 col-md-10 col-md-offset-2">
							<ProgramDescription>
								This project deals with the visualization work that can visually express, search and
								analyze the main scene of the video from the video streaming of the game which is
								recently combined with the chat. Chat used as a window of user response can be effective
								not only in the number of simple feeds but also in presenting meaningful criteria for
								analyzing videos based on the words used. In this project, I devised and implemented a
								visualization that will accomplish the goals that will help the audience after
								collecting the most frequently mentioned words from video chats. The data used in this
								project was collected through twitch tv, parsed by Python, and implemented using a
								stacked bar chart, treemap, and Volume-Bias chart using d3.js and HTML canvas.
							</ProgramDescription>
						</div>
					</div>
				</div>
			</div>

			<div className="row center-xs">
				<div className="col-xs-22 col-sm-18 shadow-5">
					<VideoWrapper>
						<iframe
							id="ytplayer"
							type="text/html"
							width="1000"
							height="562.5"
							src="https://www.youtube.com/embed/As5N7H4kWVU"
							frameborder="0"
							allowfullscreen
						/>
					</VideoWrapper>
				</div>
			</div>

			<div className="block-hide block-show-sm">
				<div className="row">
					<div className="ratio--4-1">
						<div className="ratio__inner" />
					</div>
				</div>
			</div>
		</IntroContainer>
	);
};

const Intro = styled(IntroUI)`
	background: #231f20;
	color: #e1e1e7;
`;

export default IntroUI;
