import React from 'react'


import loading_bg from './img/loading_bg.png'
import checklist from './img/checklist.png'

import trexMp4 from './img/Trex.mp4'
import contextMp4 from './img/context_blurred.mp4'
import fbLikeMp4 from './img/balloon.mp4'
import pwa from './img/pwa.gif'
import pwa_member from './img/pwa_member.gif'
import questions from './img/questions.gif'
import questions_bg from './img/questions_bg.png'
import box from './img/box.png'

import congratulation from './img/congrat.png'
import textInc from './img/font_increasing.png'



const Ideation = () => {
    const style = {
        loading_bg:{
            background: `url(${loading_bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 50%'
        },
        pwa:{
            marginTop: '-13vw',
        },
        questionBg:{
            marginTop: '1vw'
        },
        contextImg:{
            marginTop: '-5%'
        },
        box:{
            marginTop:'-13vw'
        },
        postlist:{
            left: '-12vw',
            flexWrap:'nowrap'
        },
        post: {
            marginLeft: '1.25vw'
        },
        fbLike:{
            marginTop: '-2.5vw',
        },
        textInc:{
            opacity: 0.3
        }

    }
    return (
        <div>
            {/* inspirations */}
            <div className="ratio--3-1">
                <div className="row middle-xs ratio__inner">
                    <div className="col-xs">
                        <div className="row center-xs">
                            <div className="col-xs-4">
                                <div className="section__title">Inspiration</div>
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
            <div className="row" style={style.loading_bg}>
                <div className="col-xs">
                    <div className="row">
                        <div className="col-xs-9 col-xs-offset-3">
                            <div className="TRex">
                                <div className="ratio__inner Trex__bg"></div>
                                <div className="ratio__inner">
                                    <video className="ratio__img" autoPlay playsInline="" muted="" loop poster="">
                                        <source type="video/mp4" src={trexMp4}/>
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-xs-offset-4">
                            <img className="ratio__img" src={checklist}/>
                        </div>
                    </div>

                    <div className="row" style={style.pwa}>
                        <div className="col-xs-6 col-xs-offset-14">
                            <div className="pwa">
                                <div className="ratio__inner ratio__inner--overflow">
                                    <img className="ratio__img" src={pwa_member}/>
                                    <img className="ratio__img"  src={pwa}/>
                                </div>
                                <div className="ratio__inner pwa__guide"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row middle-xs">
                        <div className="col-xs-7 col-xs-offset-4">
                            <div className="questions">
                                <div className="ratio__inner" style={style.questionBg}>
                                    <img className="ratio__img" src={questions_bg}/>
                                </div>
                                <div className="ratio__inner">
                                    <img className="ratio__img" src={questions}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2">
                            <div className="article__paragraph">
                                To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                            </div>
                        </div>
                    </div>
                    <div className="ratio--4-1"></div>
                </div>
            </div>


            <div className="row">
                <div className="col-xs-10 col-xs-offset-2">
                    <div className="chrome">
                        <div className="ratio__inner">
                            <video className="ratio__img" style={style.contextImg} autoPlay playsInline="" muted="" loop poster="">
                                <source type="video/mp4" src={contextMp4}/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row middle-xs" style={style.box}>
                <div className="col-xs-8 col-xs-offset-2">
                    <div className="article__paragraph">
                        To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                    </div>
                </div>
                <div className="col-xs-12 col-xs-offset-1">
                    <img className="ratio__img"src={box}/>
                </div>
                <div className="ratio--4-1"></div>
            </div>


            <div className="row middle-xs" style={style.postlist}>
                {[1,2,3,4,5].map((i)=> {
                    if(i!=2){
                        return (<div className="col-xs-6" key={i} style={style.post}>
                            <div className="post--dummy">
                                <div className="ratio__inner">
                                    <div className="row middle-xs center-xs post--dummy__inner">
                                        <div className="lines">
                                            <div className="line"></div>
                                            <div className="line"></div>
                                            <div className="line"></div>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }else{
                        return (
                            <div className="col-xs-11" key={i} style={style.post}>
                                <img className="ratio__img" src={congratulation} alt=""/>
                            </div>
                        )
                    }

                    }
                )}

            </div>

            <div className="row middle-xs">
                <div className="col-xs-10 col-xs-offset-4">
                    <div className="text-increasing">
                        <div className="ratio__inner">
                            <img className="ratio__img" style={style.textInc} src={textInc}/>
                        </div>
                        <div className="ratio__inner row middle-xs">
                            <div className="col-xs-22 col-xs-offset-1">
                                <div className="article__paragraph">
                                    To acheive project every week, making both creative and useful idea are important aspects. Also it cannot be done without researches about fields related to the subject. Through NDF, I made creative ideas based on statistical researches and proved ability of linking things from other resources derived from my experience and inspiration.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-5" style={style.fbLike}>
                    <div className="fb-like shadow--hard">
                        <div className="ratio__inner">
                            <video className="ratio__img" autoPlay playsInline="" muted="" loop poster="">
                                <source type="video/mp4" src={fbLikeMp4}/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ratio--4-1"></div>
        </div>
    )
}

export default Ideation
