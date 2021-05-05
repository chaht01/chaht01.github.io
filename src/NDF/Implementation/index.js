import React from 'react';
import Iphone from '../../Iphone';
import Game from './component/Game';

import bird from './component/Game/img/bird.png';

import game_transition from './img/game_transition.png';
import cloud from './img/cloud.png';
import trans_status1 from './img/trans_status1.png';
import trans_status2 from './img/trans_status2.png';
import trans_status3 from './img/trans_status3.png';
import trans_status4 from './img/trans_status4.png';
import trans_status5 from './img/trans_status5.png';

import touch_blur from './component/Game/img/touch_blur.png';

import handmockup from './img/hand_mockkup.png';
import mainChannel from './img/main_structure.png';
import row_branch from './img/branch_row.png';
import row_brand from './img/brand_row.png';

import channelMainVideo from './video/mainVideo.mp4';
import changeChannelVideo from './video/changeChannel.mp4';
import depth_view from './img/depth_view.png';

import live_icons from './img/live_icons.png';
import live_icon1 from './img/live_icon1.png';
import live_icon2 from './img/live_icon4.png';
import live_icon4 from './img/live_icon2.png';
import live_icon3 from './img/live_icon3.png';

import live_video1 from './video/live_1.mp4';
import live_video2 from './video/live_2.mp4';
import live_video4 from './video/live_4.mp4';

import translate_before from './img/before_translate.png';
import translate_after from './img/after_translate.png';

import selection_tile from './img/selection_tiles.png';

const style = {
	brand_detail: {
		marginTop: '5vw'
	},
	new_channel: {
		marginTop: '-5vw',
		marginBottom: '-5vw'
	},
	hand_mockup: {
		backgroundImage: `url(${handmockup})`,
		backgroundPositionX: '90%',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat'
	},
	channelMainPhone: {
		marginTop: '-50vw'
	},
	depth_view: {
		marginBottom: '-13vw'
	}
};

const Implementation = () => {
	return (
		<div>
			<div>
				<div className="row">
					<div className="col-xs-12">
						<div className="ratio--4-1" />
					</div>
				</div>
				<div className="row center-xs">
					<div className="col-xs">
						<div className="section__title">Implementation</div>
					</div>
				</div>
				<div className="row center-xs">
					<div className="col-xs-16 col-sm-12 col-md-12">
						<div className="section__description">
							Although it is not easy to make ideas and construct prototypes weekly, implementation is the
							most obvious way to deliver more vividly. Because design results will speak for themselves
							than any resources and explanations for the design process. Followings are the results from
							inspiration and ideation mentioned above.
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="ratio--4-1" />
					</div>
				</div>
			</div>
			{/* project 1 */}
			<div className="row">
				<div className="col-xs-24 col-md-24">
					<div className="row bottom-xs project">
						<div className="col-xs-10 col-md-10 col-xs-offset-1 col-md-offset-2">
							<div className="project__title project__title--red">
								<div>What if I</div>
								<div>hang mirror on</div>
								<div>the Naver app?</div>
							</div>
						</div>
						<div className="col-xs col-sm-8 col-sm-offset-3">
							<div className="project__desc">
								<span className="project__name">Department</span>
								<span className="project__item">Naver App Lab</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Present Type</span>
								<span className="project__item">Keynote</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Tools</span>
								<span className="project__item">Photoshop, Keynote</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Team</span>
								<span className="project__item">Hyuntak Cha</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-24 col-md-24">
							<div className="row center-xs game_transition_status">
								{[
									trans_status1,
									trans_status2,
									trans_status3,
									trans_status4,
									trans_status5
								].map((img, i) => (
									<div key={i} className="col-xs-3 col-md-3 game_transition_status__item">
										<div className="ratio--2-1" />
										<img className="ratio__img" src={img} alt="" />
									</div>
								))}
							</div>
							<img className="ratio__img" src={game_transition} alt="" />
							<div className="project1">
								<div className="ratio__inner">
									<svg height="100%" width="100%">
										<defs>
											<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
												<stop offset="0%" style={{ stopColor: '#f66241', stopOpacity: 1 }} />
												<stop offset="100%" style={{ stopColor: '#f6a741', stopOpacity: 1 }} />
											</linearGradient>
										</defs>
										<rect width="100%" height="100%" fill="url(#grad1)" />
									</svg>
								</div>

								<Game />
							</div>
						</div>
					</div>
				</div>
				<div className="ratio--4-1" />
			</div>

			{/* project 2 */}
			<div className="row">
				<div className="col-xs-24 col-md-24">
					<div className="row bottom-xs project">
						<div className="col-xs-10 col-md-10 col-xs-offset-1 col-md-offset-2">
							<div className="project__title project__title--blue">
								<div>I am</div>
								<div>perfect</div>
								<div>for you</div>
							</div>
						</div>
						<div className="col-xs col-sm-8 col-sm-offset-3">
							<div className="project__desc">
								<span className="project__name">Department</span>
								<span className="project__item">Naver Music</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Present Type</span>
								<span className="project__item">Keynote, Web, Video</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Tools</span>
								<span className="project__item">Photoshop, Framer, Keynote</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Team</span>
								<span className="project__item">Hyuntak Cha, Jiyoon Lee</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="project2 col-xs-24 col-md-24">
							<div className="project2__hand">
								<div className="ratio__inner" style={style.hand_mockup} />
							</div>
						</div>
					</div>
					<div className="row project2__navigation">
						<div className="ratio__inner ratio__inner--overflow row middle-xs">
							<div
								className="col-xs-5 col-md-5 col-xs-offset-3 col-md-offset-3"
								style={style.channelMainPhone}
							>
								<div className="row center-xs">
									<Iphone video={channelMainVideo} />
									<div className="article__paragraph" />
								</div>
							</div>
							<div className="col-xs-10 col-md-10 col-xs-offset-3 col-md-offset-3">
								<img className="ratio__img" src={mainChannel} alt="" />
							</div>
						</div>
					</div>
					<div className="row project2__branching">
						<div className="ratio__inner row middle-xs">
							<div className="col-xs-17 col-md-17 col-xs-offset-4 col-md-offset-4">
								<img className="ratio__img" src={row_branch} alt="" />
							</div>
						</div>
					</div>
					<div className="row project2__branching">
						<div className="ratio__inner row middle-xs">
							<div className="col-xs-17 col-md-17 col-xs-offset-4 col-md-offset-4">
								<img className="ratio__img" src={row_brand} alt="" />
							</div>
						</div>
					</div>
					<div className="row project2__gesture">
						<div className="ratio__inner row">
							<div className="col-xs-20 col-sm-16 col-md-11 col-xs-offset-2 col-sm-4 col-md-offset-6">
								<img className="ratio__img" src={depth_view} alt="" />
							</div>
						</div>
						<div className="ratio__inner row bottom-xs center-xs">
							<div className="col-xs-8 col-sm-8 col-md-4" style={style.depth_view}>
								<Iphone video={changeChannelVideo} />
							</div>
						</div>
					</div>
				</div>
				<div className="ratio--4-1" />
			</div>

			{/* project 3 */}
			<div className="row">
				<div className="col-xs-24 col-md-24">
					<div className="row bottom-xs project">
						<div className="col-xs-10 col-md-10 col-xs-offset-1 col-md-offset-2">
							<div className="project__title project__title--green">
								<div>I can</div>
								<div>see your</div>
								<div>voice</div>
							</div>
						</div>
						<div className="col-xs col-sm-8 col-sm-offset-3">
							<div className="project__desc">
								<span className="project__name">Department</span>
								<span className="project__item">Naver VLive</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Present Type</span>
								<span className="project__item">Keynote, Web, Video</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Tools</span>
								<span className="project__item">Illustrator, AfterEffect, Framer, Keynote</span>
							</div>
							<div className="project__desc">
								<span className="project__name">Team</span>
								<span className="project__item">Hyuntak Cha, Soeun Bae</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-22 col-md-22 col-xs-offset-1 col-md-offset-1">
							<div className="project3">
								<div className="row center-xs">
									<div className="col-xs-18 col-sm-16 col-md-10">
										<div className="ratio--4-1" />
										<img className="ratio__img" src={live_icons} alt="" />
									</div>
									<div className="ratio--4-1" />
								</div>
								<div className="row center-xs">
									<div className="col-xs-18 col-sm-16 col-md-10">
										<div className="phone-landscape live_phone">
											<img
												className="ratio__img live_icon live_icon--left"
												src={live_icon1}
												alt=""
											/>
											<div className="ratio__inner live_phone__inner">
												<video
													className="ratio__img"
													autoPlay
													playsInline=""
													muted=""
													loop
													poster=""
												>
													<source type="video/mp4" src={live_video1} />
												</video>
											</div>
										</div>
									</div>
									<div className="ratio--4-1" />
								</div>
								<div className="row center-xs">
									<div className="col-xs-18 col-sm-16 col-md-10">
										<div className="phone-landscape live_phone">
											<img
												className="ratio__img live_icon live_icon--right"
												src={live_icon2}
												alt=""
											/>
											<div className="ratio__inner live_phone__inner">
												<video
													className="ratio__img"
													autoPlay
													playsInline=""
													muted=""
													loop
													poster=""
												>
													<source type="video/mp4" src={live_video2} />
												</video>
											</div>
										</div>
									</div>
									<div className="ratio--4-1" />
								</div>
								<div className="row center-xs">
									<div className="col-xs-18 col-sm-16 col-md-10">
										<div className="phone-landscape live_phone">
											<img
												className="ratio__img live_icon live_icon--left"
												src={live_icon3}
												alt=""
											/>
											<div className="ratio__inner live_phone__inner">
												<div className="flip_container">
													<div className="flip">
														<figure className="front">
															<img className="ratio__img" src={translate_before} alt="" />
														</figure>
														<figure className="back">
															<img className="ratio__img" src={translate_after} alt="" />
														</figure>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ratio--4-1" />
								</div>
								<div className="row center-xs">
									<div className="col-xs-18 col-sm-16 col-md-10">
										<div className="phone-landscape live_phone">
											<img
												className="ratio__img live_icon live_icon--right"
												src={live_icon4}
												alt=""
											/>
											<div className="ratio__inner live_phone__inner">
												<video
													className="ratio__img"
													autoPlay
													playsInline=""
													muted=""
													loop
													poster=""
												>
													<source type="video/mp4" src={live_video4} />
												</video>
											</div>
										</div>
									</div>
									<div className="ratio--4-1" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ratio--4-1" />
			</div>
		</div>
	);
};

export default Implementation;
