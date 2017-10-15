import React from 'react'

let style = {
    test:{

    }
}

const Wallpapaer = () => {
    return (
        <div className="shadow" style={style}>
            <div className="img-container">
                <img src={process.env.PUBLIC_URL+'/img/bg1.jpg'}/>
            </div>
        </div>
    )
}

export default Wallpapaer
