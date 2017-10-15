import React from 'react'
import * as ReactDOM from "react-dom";

class Floating extends React.Component{
    constructor(props){
        super(props)
        this.checkVisible = this.checkVisible.bind(this)
        this.getOffset = this.getOffset.bind(this)
        this.getStyle = this.getStyle.bind(this)
        this.state = {
            differ: 0,
            visible: false,
            style: null
        }

    }
    componentDidMount(){
        this.checkVisible()
    }
    componentWillReceiveProps(){
        this.checkVisible()
    }
    getOffset(elem){
        let offset = {
            top:0,
            left:0
        }
        do{
            if(!isNaN(elem.offsetLeft)){
                offset.left += elem.offsetLeft
            }
            if(!isNaN(elem.offsetTop)){
                offset.top += elem.offsetTop
            }
        } while (elem = elem.offsetParent)
        return offset
    }
    checkVisible(){
        let elem = ReactDOM.findDOMNode(this)
        const offset = this.getOffset(elem);
        const differ = window.innerHeight + this.props.scrolltop - offset.top
        const marginalPoint = {
            min: -150,
            transitionMin: -100,
            transitionMax: 100,
            max: 150
        }
        this.setState({
            differ: differ
        })
        if(marginalPoint.transitionMax < differ){
            this.setState({
                visible: true,
                style: this.getStyle(differ, elem)
            })
        }

        if(differ < marginalPoint.transitionMin){
            this.setState({
                visible: false,
                style: this.getStyle(differ, elem)
            })
        }
    }
    getStyle(differ, elem){
        return Object.assign({}, this.props.style, (this.props.speed ==0 ? {} : {
            transform: `translate3d(0, ${this.props.speed*((window.innerHeight/2)-(differ - elem.clientHeight/2))/window.innerHeight}px, 0)`
        }))
    }
    render(){
        return(
            <div style={this.state.style} className={!this.props.fade || this.state.visible ? 'floating active': 'floating'}>{this.props.component({...this.props, ...this.state})}</div>
        )
    }
}

export default Floating
