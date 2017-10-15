import React from 'react'
import blendStyle from './blendStyle'
import Intro from './NDF/Intro/index'
import Inspiration from './NDF/Inspiration'
import Ideation from './NDF/Ideation'
import Implementation from './NDF/Implementation'

import './ndf.css'
const style = {

}
class NDF extends React.Component{

    constructor(props){
        super(props);
        this.blendStyle = blendStyle.bind(this);
    }

    render() {
        return (
            <div>
                <Intro/>
                <Inspiration/>
                <Ideation/>
                <Implementation/>
            </div>
        )
    }
}

export default NDF
