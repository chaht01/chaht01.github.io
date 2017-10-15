import React from 'react'

import researchTable from './img/ux_table.png'
import dots from './img/dots.png'
import elevatorText from './img/elavator_sketch.png'
import elevator from './img/elevator.png'
import wifiSketch from './img/wifi.png'
import blurCombine from './img/blur_combine.png'
import wireframe1 from './img/wireframe1.png'
import wireframe2 from './img/wireframe2.png'
import wireframe3 from './img/wireframe3.png'
import wireframe4 from './img/wireframe4.png'
import converge from './img/converge_graph.png'
import textFlood from './img/text_bg.png'
import longSentence from './img/long.png'
import shortSentence from './img/short.png'
import liveStage from './img/live.png'

const style = {
    elevator:{
        marginTop: '-7.5vw',
    },
    wifiSketch:{
        marginLeft: '-1.25vw',
        marginTop: '-7.5vw'
    },
    idea1:{
        marginTop: '7.5vw'
    },
    wireframes:{
        marginTop: '-20vw',
    },
    converge:{
        marginTop: '-10vw'
    },
    idea2:{
        marginTop: '-5vw'
    },
    longSentence:{
        marginBottom: '-5vw',
    },
    shortSentence:{
        marginTop: '-5vw',
    },
    live:{
        marginTop: '5vw'
    }
}

const Ideation = () => {
    return(
        <div>
            <div className="ratio--3-1">
                <div className="row middle-xs ratio__inner">
                    <div className="col-xs">
                        <div className="row center-xs">
                            <div className="col-xs">
                                <div className="section__title">Ideation</div>
                            </div>
                        </div>
                        <div className="row center-xs">
                            <div className="col-xs-12">
                                <div className="section__description">To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-xs-offset-2">
                    <img className="ratio__img" src={researchTable}/>
                </div>
                <div className="col-xs-6 col-xs-offset-2">
                    <div className="dot-bg">
                        <div className="ratio__inner">
                            <img className="ratio__img" src={dots}/>
                        </div>
                        <div className="ratio__inner row middle-xs">
                            <div className="col-xs">
                                <img className="ratio__img" src={elevatorText}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={style.elevator}>
                <div className="col-xs-6 col-xs-offset-13">
                    <img className="ratio__img shadow" src={elevator}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-11 col-xs-offset-2">
                    <img className="ratio__img" style={style.wifiSketch} src={wifiSketch}/>
                </div>
                <div className="col-xs-8 col-xs-offset-1" style={style.idea1}>
                    <div className="idea">
                        <div className="title title--orange">
                            Keep from
                        </div>
                        <div className="title title--orange">
                            being bored
                        </div>
                        <div className="desc desc--below">
                            To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                        </div>
                    </div>
                </div>
                <div className="ratio--4-1"></div>
            </div>

            <div className="row">
                <div className="col-xs-11 col-xs-offset-2">
                    <img className="ratio__img" src={blurCombine}/>
                </div>
            </div>
            <div className="row" style={style.wireframes}>
                <div className="col-xs-14 col-xs-offset-7">
                    <div className="row">
                        {[wireframe1, wireframe2, wireframe3, wireframe4].map((frame, i)=>
                            <div className="col-xs" key={i}>
                                <img className="ratio__img" src={frame}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row" style={style.converge}>
                <div className="col-xs-24">
                    <img className="ratio__img" src={converge}/>
                </div>
            </div>
            <div className="row middle-xs" style={style.idea2}>
                <div className="col-xs-6 col-xs-offset-5">
                    <div className="idea">
                        <div className="title title--blue title--center">
                            Move less
                        </div>
                        <div className="title title--blue title--center">
                            Do more
                        </div>
                        <div className="title title--blue title--center">
                            Keep simple
                        </div>
                    </div>
                </div>
                <div className="col-xs-8 col-xs-offset-1">
                    <div className="idea">
                        <div className="desc">
                            To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                        </div>
                    </div>
                </div>
                <div className="ratio--4-1"></div>
            </div>

            <div className="row" style={style.longSentence}>
                <div className="col-xs-10 col-xs-offset-1">
                    <img className="ratio__img" src={longSentence}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-24">
                    <img className="ratio__img" src={textFlood}/>
                </div>
            </div>
            <div className="row" style={style.shortSentence}>
                <div className="col-xs-10 col-xs-offset-13">
                    <img className="ratio__img" src={shortSentence}/>
                </div>
            </div>
            <div className="row" style={style.live}>
                <div className="col-xs-8 col-xs-offset-4">
                    <div className="idea">
                        <div className="title title--green">
                            Make
                        </div>
                        <div className="title title--green">
                            Prominent & Live
                        </div>
                        <div className="desc desc--below">
                            To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                        </div>
                    </div>
                </div>
                <div className="col-xs-7 col-xs-offset-2">
                    <img className="ratio__img" src={liveStage}/>
                </div>
            </div>
            <div className="ratio--4-1"></div>
        </div>
    )
}

export default Ideation
