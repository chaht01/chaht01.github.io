import React from 'react'

import researchTable from './img/ux_table.png'
import dots from './img/dots.png'
import elevatorText from './img/elavator_sketch.png'
import elevator from './img/elevator.png'
import wifiSketch from './img/wifi.png'

import sonelikethis from './img/songlikethis.png'
import wireframe_list from './img/wireframe_list.png'

import textFlood from './img/text_bg.png'
import longSentence from './img/long.png'
import shortSentence from './img/short.png'
import liveStage from './img/live.png'
import contextMp4 from './img/context_blurred.mp4'
import box from './img/box.png'

const style = {
    elevator:{
        marginTop: '-7.5vw',
        zIndex: 1
    },
    wifiSketch:{
        marginLeft: '-1.25vw',
        marginTop: '-7.5vw'
    },
    idea1:{
        marginTop: '7.5vw'
    },
    contextImg:{
        marginTop: '-5%'
    },
    box:{
        marginTop:'-13vw',
        reverse:{
            marginTop: '13vw'
        }
    },
    wireframes:{
        marginTop: '-35vw',
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
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ratio--4-1"></div>
                    </div>
                </div>
                <div className="row center-xs">
                    <div className="col-xs">
                        <div className="section__title">Ideation</div>
                    </div>
                </div>
                <div className="row center-xs">
                    <div className="col-xs-16 col-sm-12 col-md-12">
                        <div className="section__description">I realized that plotting and designing through the development process is very important in order for persuasiveness to be seen as a result of applying directly or indirectly to problems that need to be solved. Many of resources, existing applications, and research about other competent products are used and it is helpful trim rough idea by diverging and converging itself repeatedly.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ratio--4-1"></div>
                    </div>
                </div>
            </div>
            <div className="block-hide block-show-max-sm">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ratio--4-1"></div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-xs-14 col-sm-12 col-xs-offset-1 col-sm-offset-2">
                    <img className="ratio__img" src={researchTable}/>
                </div>
                <div className="col-xs-8 col-sm-6 col-xs-offset-1 col-sm-offset-2">
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
                <div className="col-xs-6 col-sm-6 col-xs-offset-16 col-sm-offset-13">
                    <img className="ratio__img shadow" src={elevator}/>
                </div>
            </div>
            <div className="row center-xs start-sm">
                <div className="col-xs-14 col-sm-11 col-xs-offset-1 col-sm-offset-2">
                    <div className="block-hide block-show-max-sm">
                        <div className="ratio--4-1"></div>
                    </div>
                    <img className="ratio__img" style={style.wifiSketch} src={wifiSketch}/>
                </div>
                <div className="col-xs-20 col-sm-8 col-sm-offset-1" style={style.idea1}>
                    <div className="idea">
                        <div className="title title--orange">
                            Keep from
                        </div>
                        <div className="title title--orange">
                            being bored
                        </div>
                        <div className="article__paragraph desc desc--below">
                            Like psychological research about elevator mirror, I think the main role of portal site is to keep people entertained or less bored in the situation the network is unstable. Especially for the teenage user group who are considered to be more sensitive to the network stability, I believe the game like T-Rex is needed in order to keep them entertained in unstable or off-line network. To satisfy this, I have designed the ways to approach the game and manipulation to suit the current characteristics of the teenagers.
                        </div>
                    </div>
                </div>
                <div className="ratio--4-1"></div>
            </div>

            <div className="row top-xs">
                <div className="col-xs-8 col-md-8 col-xs-offset-3 col-md-offset-3">
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
                        <div className="desc desc--below article__paragraph block-hide block-show-min-sm">
                            People want to find the music that suits their taste perfectly, however it is not possible. So I believe music recommendation system needs to change entirely. Owing to developments and improvement of AI, such as Naver Clova, we do not necessarily chose the catergories of genre and artist of the music. But instead we can give users ranges of the choices based on the music that they listen to. This will prevent the users from getting options that are so unsuitable for their taste that will surprise users.
                        </div>
                    </div>
                    <div className="ratio--4-1 block-hide-max-sm"></div>
                </div>
                <div className="col-xs-10 col-md-10">
                    <img className="ratio__img" src={sonelikethis} alt=""/>
                </div>
            </div>
            <div className="block-hide block-show-max-sm">
                <div className="row center-xs">
                    <div className="col-xs-20">
                        <div className="desc desc--below article__paragraph">
                            People want to find the music that suits their taste perfectly, however it is not possible. So I believe music recommendation system needs to change entirely. Owing to developments and improvement of AI, such as Naver Clova, we do not necessarily chose the catergories of genre and artist of the music. But instead we can give users ranges of the choices based on the music that they listen to. This will prevent the users from getting options that are so unsuitable for their taste that will surprise users.
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="ratio--4-1"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-md-10 col-xs-offset-2 col-md-offset-2">
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
                <div className="col-xs-9 col-md-8 col-xs-offset-2 col-md-offset-2" style={style.box.reverse}>
                    <div className="article__paragraph">
                        From google Chrome’s improved gesture of ‘pull-to-refresh’, I thought it can be applied to achieve goal of navigating hierarchical structure (playlists — songs in playlist). Thanks to this idea, we can structure our service independent from contents and make it simple.
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-xs-offset-1 col-md-offset-1">
                    <img className="ratio__img"src={box}/>
                </div>
                <div className="ratio--4-1 block-hide-max-md"></div>
                <div className="ratio--3-1 block-hide block-show-max-md"></div>
            </div>
            <div className="row center-xs" style={style.wireframes}>
                <div className="col-xs-20 col-sm-16">
                    <img className="ratio__img" src={wireframe_list} alt=""/>
                </div>
                <div className="ratio--4-1"></div>
            </div>



            <div className="row" style={style.longSentence}>
                <div className="col-xs-10 col-md-10 col-xs-offset-1 col-md-offset-1">
                    <img className="ratio__img" src={longSentence}/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-24 col-md-24">
                    <img className="ratio__img" src={textFlood}/>
                </div>
            </div>
            <div className="row" style={style.shortSentence}>
                <div className="col-xs-10 col-md-10 col-xs-offset-13 col-md-offset-13">
                    <img className="ratio__img" src={shortSentence}/>
                </div>
            </div>
            <div className="row" style={style.live}>
                <div className="col-xs-10 col-sm-8 col-xs-offset-2 col-sm-offset-4">
                    <div className="idea">
                        <div className="title title--green">
                            Make
                        </div>
                        <div className="title title--green">
                            Prominent & Live
                        </div>
                        <div className="desc desc--below article__paragraph">
                            Facebook demonstrated how fans can deliver their messages to their celebrities in faster and more effective manner. And as many international fans are using global live services, we designed the service to deliver the message without translation. Lastly, since most of the live broadcast celebrities are singers we constructed the interactive system for the viewer as if they are listening to a live show.
                        </div>
                    </div>
                </div>
                <div className="col-xs-7 col-md-7 col-xs-offset-2 col-md-offset-2">
                    <img className="ratio__img" src={liveStage}/>
                </div>
            </div>
            <div className="ratio--4-1"></div>
        </div>
    )
}

export default Ideation
