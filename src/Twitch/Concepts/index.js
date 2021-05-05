import React from 'react';
import styled from 'styled-components';
import { colors } from '../var';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import concept1 from './img/concept1.mp4';
import concept2 from './img/concept2.mp4';
import concept3 from './img/concept3.mp4';
import pxToVw from '../../Helper/pxToVw';
import media from '../../Helper/media';
import Konva from 'konva';
import chroma from 'chroma-js';

const ConceptWrapper = styled.div`
	position: relative;
	width: 100%;
`;
const ConceptLabel = styled.div`
	font-size: ${pxToVw(20)}px;
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	margin-bottom: 1em;
	${media.md`
  font-size: ${pxToVw(16)}px;
  margin-top: 1em;
`} ${media.sm`
  font-size: ${pxToVw(16)}px;
  margin-top: 1em;
`};
`;
const ConceptRep = styled.div`
	position: relative;
	width: 100%;
	padding-top: ${100 / 1.618}%;
	background: ${colors.black};
`;

const ConceptDetail = styled.div`
	font-size: ${pxToVw(16)}px;
	margin-top: 0.5em;
	font-weight: lighter;
	font-family: 'Source Sans Pro', sans-serif;
	text-align: justify;
	padding: 0 0.5em;
	overflow: hidden;
	word-break: break-word;

	${media.md`
    font-size: ${pxToVw(14)}px;
    margin-top: 1em;
  `} ${media.sm`
    font-size: ${pxToVw(14)}px;
    margin-top: 1em;
  `};
`;

ConceptRep.Inner = styled(Stage)`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	overflow: hidden;
	${props =>
		props.filter
			? `
  & canvas {
    -webkit-filter: url("#goo");
    filter: url("#goo");
  }`
			: null};
`;

function easeInOutExpo(t, b, c, d) {
	if (t == 0) return b;
	if (t == d) return b + c;
	if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

class TendencyClip extends React.Component {
	constructor() {
		super();
		this.pos_and_size = [
			[0.3, 0.6, chroma.scale(['#ff6956', chroma('#ff6956').saturate(3)])],
			[0.7, 0.6, chroma.scale(['#62449f', chroma('#62449f').saturate(3)])]
		];

		this.state = {
			attrib: this.pos_and_size.slice().map(([p, s, c]) => [p, s, c(0).hex()])
		};
	}
	componentDidMount() {
		let duration = 2000;
		let delay = duration / 5;
		let anim = new Konva.Animation(frame => {
			const tick = frame.time;
			let updated = this.pos_and_size.map(([pos, size, color], i) => {
				return [
					pos,
					size / 2 + size / 2 * (Math.cos(tick / 500 + Math.PI * i) + 1) * 0.5,
					color((Math.cos(tick / 500 + Math.PI * i) + 1.0) * 0.5).hex()
				];
			});
			this.setState({ attrib: updated });
		});
		anim.start();
	}
	render() {
		const { width, height } = this.props;
		return (
			<React.Fragment>
				<ConceptRep.Inner width={width} height={height} filter={true}>
					<Layer>
						{this.state.attrib.map(([pos, size, color], i) => (
							<Circle
								x={width * pos}
								y={height * 0.5}
								width={width * size}
								height={width * size}
								fill={color}
							/>
						))}
					</Layer>
				</ConceptRep.Inner>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute' }}>
					<defs>
						<filter id="goo">
							<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"
							/>
						</filter>
					</defs>
				</svg>
			</React.Fragment>
		);
	}
}

class HotClip extends React.Component {
	constructor() {
		super();
		this.pos_and_size = [
			[0.1, 0.05, 0.25],
			[0.125, 0.08333, 0.25],
			[0.4, 0.25, 0.4],
			[0.55, 0.066, 0.3],
			[0.6, 0.08333, 0.5],
			[0.8, 0.055, 0.3],
			[0.9, 1, 0.25]
		];

		this.state = {
			attrib: [
				[0.1, 0.05, 0.25],
				[0.125, 0.08333, 0.25],
				[0.4, 0.25, 0.4],
				[0.55, 0.066, 0.3],
				[0.6, 0.08333, 0.5],
				[0.8, 0.055, 0.3],
				[0.9, 1, 0.25]
			]
		};
	}
	componentDidMount() {
		let duration = 2000;
		let delay = duration / 5;
		let anim = new Konva.Animation(frame => {
			const tick = frame.time % duration;
			let updated = this.pos_and_size.map(([pos, size, opacity], i) => {
				if (tick < i * delay / 7) {
					return [pos, 0, 0];
				} else {
					let ratio = (tick - i * delay / 7) / (duration - i * delay / 7);
					return [pos, size * 1.5 * ratio, (1 - ratio) * opacity];
				}
			});
			this.setState({ attrib: updated });
		});
		anim.start();
	}
	render() {
		const { width, height } = this.props;
		return (
			<ConceptRep.Inner width={width} height={height}>
				<Layer>
					{this.state.attrib.map(([pos, size, opacity], i) => (
						<Circle
							x={width * pos}
							y={height * 0.5}
							width={width * size}
							height={width * size}
							fill={'#913dbf'}
							opacity={opacity}
						/>
					))}
				</Layer>
			</ConceptRep.Inner>
		);
	}
}

class ReferClip extends React.Component {
	constructor() {
		super();
		this.pos = [0.6, 0.4, 1.0, 0.5, 0.3, 0.8, 0.6];
		this.blocks = [
			[[0.3, 0.45]],
			[[0.0, 0.3], [0.55, 0.7]],
			[[0.35, 0.5]],
			[[0.85, 1.0]],
			[[0.6, 0.8]],
			[[0.2, 0.5]],
			[[0.3, 0.45]]
		];
		this.colors = [
			['#913dbf'],
			['#62449f', '#913dbf'],
			['#ccb6bc'],
			['#913dbf'],
			['#ccb6bc'],
			['#62449f'],
			['#913dbf']
		];

		this.state = {
			pos: this.pos,
			blocks: this.blocks,
			colors: this.colors,
			start: 0,
			offset: 0
		};
	}
	componentDidMount() {
		let duration = 1000;
		let anim = new Konva.Animation(frame => {
			const tick = frame.time % duration;
			if (duration - 500 < tick) {
				let ratio = (tick - (duration - 500)) / 500;

				this.setState({
					offset: easeInOutExpo(ratio, 0, 1, 1)
				});
			} else {
				if (this.state.offset != 0) {
					this.setState(prevState => ({
						start: prevState.start + 1,
						offset: 0
					}));
				}
			}
		});
		anim.start();
	}
	render() {
		const { width, height } = this.props;
		const offsetCalculator = i => {
			if (i == 0) {
				return this.state.offset * 0.8 + 0.2;
			}
			if (i == 1) {
				return 1 - this.state.offset * 0.8;
			}
			if (i == 5) {
				return this.state.offset * 0.8 + 0.2;
			}
			if (i == 6) {
				return 0.2;
			}
			return 1;
		};
		return (
			<ConceptRep.Inner width={width} height={height}>
				<Layer>
					{this.state.pos.map((pos, k) => {
						let i = ((k - this.state.start) % 7 + 7) % 7;
						if (pos != 1.0) {
							return (
								<React.Fragment>
									<Rect
										cornerRadius={width * 0.01}
										x={0.05 * width}
										y={
											height * 0.85 * i / 7 +
											height * 0.15 -
											height * 0.85 * this.state.offset / 7
										}
										width={width * pos * 0.9}
										height={height * 0.1}
										fill={'#e1e1e7'}
										opacity={offsetCalculator(i)}
									/>
									<Rect
										cornerRadius={width * 0.01}
										x={0.05 * width + width * pos * 0.9 + width * 0.05}
										y={
											height * 0.85 * i / 7 +
											height * 0.15 -
											height * 0.85 * this.state.offset / 7
										}
										width={width * (1 - pos) * 0.9 - width * 0.05}
										height={height * 0.1}
										fill={'#e1e1e7'}
										opacity={offsetCalculator(i)}
									/>
									{this.state.blocks[(i + this.state.start) % 7].map((b, j) => {
										return (
											<Rect
												cornerRadius={width * 0.01}
												x={0.05 * width + width * b[0] * 0.9 + width * 0.05}
												y={
													height * 0.85 * i / 7 +
													height * 0.15 -
													height * 0.85 * this.state.offset / 7
												}
												width={width * (b[1] - b[0]) * 0.9 - width * 0.05}
												height={height * 0.1}
												fill={this.state.colors[(i + this.state.start) % 7][j]}
												opacity={offsetCalculator(i)}
											/>
										);
									})}
								</React.Fragment>
							);
						} else {
							return (
								<React.Fragment>
									<Rect
										cornerRadius={width * 0.01}
										x={0.05 * width}
										y={
											height * 0.85 * i / 7 +
											height * 0.15 -
											height * 0.85 * this.state.offset / 7
										}
										width={width * pos * 0.9}
										height={height * 0.1}
										fill={'#e1e1e7'}
										opacity={offsetCalculator(i)}
									/>
									{this.state.blocks[(i + this.state.start) % 7].map((b, j) => {
										return (
											<Rect
												cornerRadius={width * 0.01}
												x={0.05 * width + width * b[0] * 0.9 + width * 0.05}
												y={
													height * 0.85 * i / 7 +
													height * 0.15 -
													height * 0.85 * this.state.offset / 7
												}
												width={width * (b[1] - b[0]) * 0.9 - width * 0.05}
												height={height * 0.1}
												fill={this.state.colors[(i + this.state.start) % 7][j]}
												opacity={offsetCalculator(i)}
											/>
										);
									})}
								</React.Fragment>
							);
						}
					})}
					<Rect x={0} y={0} width={width} height={height * 0.15} fill={colors.black} />
					<Rect x={0} y={height * 0.85} width={width} height={height * 0.15} fill={colors.black} />
				</Layer>
			</ConceptRep.Inner>
		);
	}
}

class TendencyConcept extends React.Component {
	constructor() {
		super();
		this.ref = React.createRef();
		this.state = {
			size: {
				bottom: 0,
				height: 0,
				left: 0,
				right: 0,
				top: 0,
				width: 0,
				x: 0,
				y: 0
			}
		};
	}
	refCallback = element => {
		if (element) {
			this.setState({
				size: element.getBoundingClientRect()
			});
		}
	};
	componentDidMount() {
		this.refCallback(this.ref.current);
		window.addEventListener('resize', () => {
			this.refCallback(this.ref.current);
		});
	}
	render() {
		return (
			<ConceptWrapper>
				<ConceptLabel>{this.props.label}</ConceptLabel>
				<video autoPlay muted playsInline loop class="ratio__img">
					<source src={concept3} type="video/mp4" />
				</video>
				<ConceptDetail>{this.props.children}</ConceptDetail>
			</ConceptWrapper>
		);
	}
}

class HotConcept extends React.Component {
	constructor() {
		super();
		this.ref = React.createRef();
		this.state = {
			size: {
				bottom: 0,
				height: 0,
				left: 0,
				right: 0,
				top: 0,
				width: 0,
				x: 0,
				y: 0
			}
		};
	}
	refCallback = element => {
		if (element) {
			this.setState({
				size: element.getBoundingClientRect()
			});
		}
	};
	componentDidMount() {
		this.refCallback(this.ref.current);
		window.addEventListener('resize', () => {
			this.refCallback(this.ref.current);
		});
	}
	render() {
		return (
			<ConceptWrapper>
				<ConceptLabel>{this.props.label}</ConceptLabel>
				<video autoPlay muted playsInline loop class="ratio__img">
					<source src={concept1} type="video/mp4" />
				</video>
				<ConceptDetail>{this.props.children}</ConceptDetail>
			</ConceptWrapper>
		);
	}
}

class ReferConcept extends React.Component {
	constructor() {
		super();
		this.ref = React.createRef();
		this.state = {
			size: {
				bottom: 0,
				height: 0,
				left: 0,
				right: 0,
				top: 0,
				width: 0,
				x: 0,
				y: 0
			}
		};
	}
	refCallback = element => {
		if (element) {
			this.setState({
				size: element.getBoundingClientRect()
			});
		}
	};
	componentDidMount() {
		this.refCallback(this.ref.current);
		window.addEventListener('resize', () => {
			this.refCallback(this.ref.current);
		});
	}
	render() {
		return (
			<ConceptWrapper>
				<ConceptLabel>{this.props.label}</ConceptLabel>
				<video autoPlay muted playsInline loop class="ratio__img">
					<source src={concept2} type="video/mp4" />
				</video>
				<ConceptDetail>{this.props.children}</ConceptDetail>
			</ConceptWrapper>
		);
	}
}

export { HotConcept, ReferConcept, TendencyConcept };
