import React from 'react'
import problem from './img/problem.png'
import structure from './img/structure.png'

const Role = () => {
    return (
        <div>
            <div className="ratio--2-1">
                <div className="row middle-xs ratio__inner">
                    <div className="col-xs">
                        <div className="row center-xs">
                            <div className="col-xs">
                                <div className="section__title">Role</div>
                            </div>
                        </div>
                        <div className="row center-xs">
                            <div className="col-xs-12 col-md-12">
                                <div className="section__description">When I joined Conviot team as frontend developer, I thought draft service usability structure was unfriendly and does not explain to user. Due to this, I started redesigning some flow and structure of service with our team designer. I considered both usability and possibility of development at once.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-12 col-md-12">
                    <img className="ratio__img" src={problem} alt=""/>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-12 col-md-12">
                    <div className="article__paragraph">
                        In many aspects, there were some problems in draft. Among many problems, I thought it was derived from one reason - complicated structure. Because of that, draft could make user confused and lose direction.
                    </div>
                    <div className="ratio--4-1"></div>
                </div>
            </div>

            <div className="row center-xs">
                <div className="col-xs-16 col-md-16">
                    <img className="ratio__img" src={structure} alt=""/>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-12 col-md-12">
                    <div className="article__paragraph">
                        At last, we fixed up flow structure among component to redesign service. Thanks to this flow we could make user approach meta data when users hope to use
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Role