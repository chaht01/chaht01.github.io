import React from 'react'
import Intro from './Intro'
import Role from './Role'
import Develope from './Develope'

import './conviot.css'
import * as ReactDOM from "react-dom";

class Conviot extends React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount () {
        window.scrollTo(0, 0)
        var elem = ReactDOM.findDOMNode(this)
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        window.requestAnimationFrame(function() {
            // Now set a transition on the opacity
            elem.style.transition = "opacity 250ms";
            // and set the opacity to 1
            elem.style.opacity = 1;
        });
    }

    render() {
        return (
            <div>
                <Intro/>
                <Role/>
                <Develope/>
            </div>
        )
    }
}

export default Conviot
