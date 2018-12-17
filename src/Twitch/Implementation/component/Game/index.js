import React from 'react'
import mountain_front from './img/mountain_front.png'
import mountain_back from './img/mountain_back.png'
import mountain_cloud from './img/mountain_cloud.png'
import game_phone_frame from './img/game_phone_frame.png'
import touch_blur from './img/touch_blur.png'
import game_char from './img/gameChar.png'
import bird from './img/bird.png'

const style = {
    game:{
        width: '100%',
        oveflow:'hidden'
    },
    game_phone_frame:{
        top: '50%',
        transform:'translateY(-50%)'
    },
    game_bg:{
        cursor: `url(${touch_blur}) 64 64, auto`
    }
}

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {

                top: 50, //center
                velocity: 0,
                acceleration:0,
                limit:10,
                status: 0 //0: up, 1: down

        }
        this.t = undefined
        this.changeStatus = this.changeStatus.bind(this)
        this.repeat = this.repeat.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    changeStatus(status){
        this.setState({status: status})
        if(this.state.status == 0){
                if(this.state.velocity>-10){
                    this.setState({acceleration:-0.05})
                }else{
                    this.setState({acceleration:0})
                }
                this.setState((prevState, props)=>({
                        velocity: prevState.velocity+prevState.acceleration
                }))
                this.setState((prevState, props)=>({
                        top: prevState.top + prevState.velocity
                }))

        }else{
            this.setState({acceleration:0.02})
                this.setState((prevState, props)=>({
                        velocity: prevState.velocity+prevState.acceleration
                }))
                this.setState((prevState, props)=>({
                        top: prevState.top + prevState.velocity
                }))

        }
        if(this.state.top<10){
            this.setState({top:10, velocity:0, acceleration:0})
        }
        if(this.state.top>90){
            this.setState({top:90, velocity:0, acceleration:0})
        }
    }
    repeat(status){
        this.changeStatus(status)
        this.t = setTimeout(this.repeat.bind(this,status), 10)
    }
    onMouseDown(){
        clearTimeout(this.t)
        this.repeat(0)
    }
    onMouseUp(){
        clearTimeout(this.t)
        this.repeat(1)
    }
    onMouseOut(){
        clearTimeout(this.t)
        this.t = undefined
    }

    render(){
        return(
            <div className="game" style={style.game}>
                <div className="ratio__inner game_bg">
                    <div className="row ratio__inner middle-xs game_bg__back">
                        <div className="col-xs-4 col-md-4 col-xs-offset-8 col-md-offset-8">
                            <img className="ratio__img" src={mountain_back} alt=""/>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xs-offset-8 col-md-offset-8">
                            <img className="ratio__img" src={mountain_back} alt=""/>
                        </div>
                    </div>
                    <div className="row ratio__inner middle-xs game_bg__cloud">
                        <div className="col-xs-3 col-md-3 col-xs-offset-3 col-md-offset-3">
                            <img className="ratio__img" src={mountain_cloud} alt=""/>
                        </div>
                        <div className="col-xs-3 col-md-3 col-xs-offset-3 col-md-offset-3">
                            <img className="ratio__img" src={mountain_cloud} alt=""/>
                        </div>
                        <div className="col-xs-3 col-md-3 col-xs-offset-3 col-md-offset-3">
                            <img className="ratio__img" src={mountain_cloud} alt=""/>
                        </div>
                        <div className="col-xs-3 col-md-3 col-xs-offset-3 col-md-offset-3">
                            <img className="ratio__img" src={mountain_cloud} alt=""/>
                        </div>
                    </div>
                    <div className="row ratio__inner middle-xs game_bg__front">
                        <div className="col-xs-6 col-md-6 col-xs-offset-6 col-md-offset-6">
                            <img className="ratio__img" src={mountain_front} alt=""/>
                        </div>
                        <div className="col-xs-6 col-md-6 col-xs-offset-6 col-md-offset-6">
                            <img className="ratio__img" src={mountain_front} alt=""/>
                        </div>
                    </div>
                </div>


                <div className="ratio__inner">
                    <div className="row birds_1">
                        <div className="col-xs-2 col-md-2 col-xs-offset-6 col-md-offset-6">
                            <div className="ratio--4-1"></div>
                            <img className="ratio__img" src={bird} alt=""/>
                        </div>
                        <div className="col-xs-2 col-md-2 col-xs-offset-10 col-md-offset-10">
                            <div className="ratio--2-1"></div>
                            <img className="ratio__img" src={bird} alt=""/>
                        </div>
                    </div>
                    <div className="row birds_2">
                        <div className="col-xs-2 col-md-2 col-xs-offset-12 col-md-offset-12">
                            <div className="ratio--2-1"></div>
                            <img className="ratio__img" src={bird} alt=""/>
                        </div>
                    </div>
                    <div className="row birds_3">
                        <div className="col-xs-2 col-md-2 col-xs-offset-3 col-md-offset-3">
                            <div className="ratio--2-1"></div>
                            <img className="ratio__img" src={bird} alt=""/>
                        </div>
                        <div className="col-xs-2 col-md-2 col-xs-offset-14 col-md-offset-14">
                            <div className="ratio--4-1"></div>
                            <img className="ratio__img" src={bird} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="ratio__inner ratio__inner--overflow">
                    <div className="row" style={style.game_phone_frame}>
                        <div className="col-xs-10 col-md-10 col-xs-offset-1 col-md-offset-1">
                            <img className="ratio__img" src={game_phone_frame} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="ratio__inner" style={style.game_bg}
                     onMouseDown={(e)=>this.onMouseDown()}
                     onMouseUp={(e)=>this.onMouseUp()}
                     onMouseOver={(e)=>this.onMouseUp()}
                     onMouseOut={(e)=>this.onMouseOut()}>
                    <div className="col-xs-2 col-md-2 col-xs-offset-4 col-md-offset-4" style={{position:'relative',transform:'translateY(-50%)',top:`${this.state.top}%`}}>
                        <img className="ratio__img" src={game_char} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Game