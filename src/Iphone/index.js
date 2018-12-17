import React from 'react'
import frame from './img/iphone_mockup2.png'

const style = {
    fade:{
        header:{

        },
        footer:{

        }
    }
}

const hexTorgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
}

const fadeGenerator = ({color, direction}) => {
    switch (direction){
        case 'top': return {
            top: 0,
            background: `linear-gradient(to bottom, rgba(${hexTorgb(color).r},${hexTorgb(color).g},${hexTorgb(color).b},1) 50%,
                        rgba(${hexTorgb(color).r},${hexTorgb(color).g},${hexTorgb(color).b},0) 100%)`
        }
        case 'bottom': return {
            top: '40%',
            background: `linear-gradient(to bottom, rgba(${hexTorgb(color).r},${hexTorgb(color).g},${hexTorgb(color).b},0) 0%,
                        rgba(${hexTorgb(color).r},${hexTorgb(color).g},${hexTorgb(color).b},1) 50%)`
        }
        default: return{
            display: 'none'
        }
    }
}

const Iphone =  ({fade, img, video, direction, color, bazel}) => {
    return (
        <div className="phone-portrait">
            <div className="ratio__inner ratio__inner--overflow">
                <img className="ratio__img phone-portrait__frame" src={frame} alt=""/>
            </div>
            <div className="ratio__inner">
                <div className="phone-portrait__screen">
                    <div className="ratio__inner">
                        {img ? (
                                <img className="ratio__img" src={img} alt=""/>
                            ) : (video ?
                                    (<video className="ratio__img" autoPlay playsInline="" muted="" loop poster="">
                                        <source type="video/mp4" src={video}/>
                                    </video>) : null
                            )}

                    </div>
                </div>
            </div>
            <div className="ratio__inner phone-portrait__fade" style={fade ?  fadeGenerator(fade) : {display:'none'}}></div>
        </div>
    )
}

export default Iphone
