import React from 'react'
import Wallpaper from '../Wallpaper'
import topic_napp from './img/napp.png'
import topic_nstudio from './img/studio.png'
import topic_ni from './img/naveri.png'
import topic_neditor from './img/smarteditor.png'
import topic_nkeyboard from './img/nkeyboard.png'
import topic_nradio from './img/nradio.png'
import topic_ncafe from './img/ncafe.png'
import topic_nlive from './img/nlive.png'
const Intro = () => {
    return (
        <div>
                <div className="row center-xs middle-xs full-height">
                    <div className="col-xs">
                        <div className="row start-xs">
                            <div className="col-xs-6 col-xs-offset-3">
                                <div className="program__title">Naver</div>
                                <div className="program__title">Design</div>
                                <div className="program__title">Fellowship</div>
                            </div>
                            <div className="col-xs-11 col-xs-offset-1">
                                <div className="program__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too k a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="row">
                <div className="col-xs-18 col-xs-offset-3">
                    <Wallpaper/>
                    <div className="ratio--3-1"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-5">
                    <div className="topics shadow--hard">
                        <div className="ratio__inner">
                            <img className="ratio__img" src={topic_napp}/>
                        </div>
                    </div>
                </div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_nstudio}/>
                    </div>
                </div></div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_ni}/>
                    </div>
                </div></div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_neditor}/>
                    </div>
                </div></div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-8">
                    <span className="topics-typo">Topics</span>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_nkeyboard}/>
                    </div>
                </div></div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_nradio}/>
                    </div>
                </div></div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_ncafe}/>
                    </div>
                </div></div>
                <div className="col-xs-5 col-xs-offset-1"><div className="topics shadow--hard">
                    <div className="ratio__inner">
                        <img className="ratio__img" src={topic_nlive}/>
                    </div>
                </div></div>
            </div>
        </div>
    )
}

export default Intro
