import React from 'react';
import intro_wall1 from './img/intro_wall1.png';
import intro_wall2 from './img/intro_wall2.png';
import intro_msg1 from './img/intro_msg1.png';
import intro_msg2 from './img/intro_msg2.png';

const style = {
	wall1: {
		background: `url(${intro_wall1})`
	},
	wall2: {
		background: `url(${intro_wall2})`
	},
	applet: {
		marginTop: '-30vw',
		marginBottom: '30vw'
	}
};
const Intro = () => {
	return (
		<div>
			<div className="row center-xs middle-xs full-height">
				<div className="col-xs">
					<div className="row center-xs start-md">
						<div className="col-xs-24 col-md-6 col-md-offset-3">
							<div className="program__title">CONVIoT</div>
						</div>
						<div className="col-xs-16 col-md-11 col-md-offset-1">
							<div className="program__description">
								In October 2016, I joined CONVIoT team as a frontend developer. CONVIoT connects various
								IoT devices and app/web services. There are already many IoT services but because
								vendors force users to download their own service, it is difficult to maintain all those
								services for the user. CONVIoT helps people to manage all IoT device and service at
								once.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-14 col-md-14 col-xs-offset-3 col-md-offset-3">
					<div className="wall1">
						<div className="ratio__inner cross--cyan">
							<img className="ratio__img wall1_img wall1_img--blur" src={intro_wall1} alt="" />
						</div>
						<div className="ratio__inner cross--cyan wall1--shift">
							<img className="ratio__img wall1_img" src={intro_wall1} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="row center-xs" style={style.applet}>
				<div className="col-xs-6 col-md-6">
					<div className="applet shadow">
						<div className="ratio__inner">
							<img className="ratio__img" src={intro_msg1} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="ratio--4-1" />
			<div className="row">
				<div className="col-xs-20 col-md-20 col-xs-offset-2 col-md-offset-2">
					<div className="wall2">
						<div className="ratio__inner cross--purple">
							<img className="ratio__img wall2_img wall2_img--blur" src={intro_wall2} alt="" />
						</div>
						<div className="ratio__inner cross--purple wall2--shift">
							<img className="ratio__img wall2_img" src={intro_wall2} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="row center-xs" style={style.applet}>
				<div className="col-xs-6 col-md-6">
					<div className="applet shadow">
						<div className="ratio__inner">
							<img className="ratio__img" src={intro_msg2} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
