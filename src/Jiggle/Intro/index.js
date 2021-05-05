import React from 'react';
import styled from 'styled-components';
import { colors } from '../var';
import wall_jiggle_fallback from './img/jiggle_wall_fallback.mp4';
import newslab_logo from './img/logo/gnf.png';
import mediati_logo from './img/logo/mediati.png';
import moneytoday_logo from './img/logo/mt.png';
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

const IntroContainer = styled.div`
	background: #df422b;
	color: ${colors.white};
`;

const SupportContainer = styled.div`background: #fff;`;

const Intro = ({ scrolltop, windowSize }) => {
	return (
		<React.Fragment>
			<IntroContainer>
				<div className="row center-xs middle-xs full-height">
					<div className="row center-xs middle-xs full-height">
						<video
							className="ratio__img"
							autoPlay
							muted
							playsInline
							loop
							style={{ position: 'absolute', height: '100%', width: 'auto' }}
						>
							<source src={wall_jiggle_fallback} type="video/mp4" />
						</video>
						<div className="col-xs" style={{ margin: 'auto' }}>
							<div className="row center-xs start-md">
								<div className="col-xs-24 col-md-6 col-md-offset-3">
									<ProgramTitle>Jiggle</ProgramTitle>
									<DemoLink
										href="http://jiggle.newslabfellows.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Visit Demo
									</DemoLink>
								</div>
								<div className="col-xs-20 col-sm-16 col-md-10 col-md-offset-2">
									<ProgramDescription>
										<b>Jiggle is a web-based data visualization tool for a journalist. </b> <br />
										With the advent of a new format of media such as interactive news, dynamic chart
										and so on, online web-based news has found many feasible ways to deliver their
										message to readers. In reality, because of this type of new media should be
										produced with many technical resources, most of the journalist suffer from being
										a lack of creating their own content like this. So with the mission of "Benefit
										media with technology" in this Google news lab fellowship program, we
										researched, designed and finally made a web-based data visualization tool for a
										journalist. In this process, different from our assumption and expectation,
										there were a lot of problems specific to Korea media environment so we
										necessarily had to figure out special solutions for our nation and below is our
										takeaway from this project.
									</ProgramDescription>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row center-xs">
					<div className="col-xs-22 col-sm-20 col-md-18 shadow-5">
						<VideoWrapper>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/LOwPcxVyog4"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/>
						</VideoWrapper>
					</div>
				</div>
				<div className="row">
					<div className="ratio--4-1">
						<div className="ratio__inner" />
					</div>
				</div>
			</IntroContainer>
			<SupportContainer>
				<div className="row center-xs middle-xs">
					<div className="col-xs-8 col-sm-6">
						<img className="ratio__img" src={newslab_logo} />
					</div>
					<div className="col-xs-8 col-sm-6">
						<img className="ratio__img" src={mediati_logo} />
					</div>
					<div className="col-xs-8 col-sm-6">
						<img className="ratio__img" src={moneytoday_logo} />
					</div>
				</div>
			</SupportContainer>
		</React.Fragment>
	);
};

export default Intro;
