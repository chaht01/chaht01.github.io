import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './fonts/geometria-light-webfont.woff'
import './grid.css';
import './layout.css';
import './index.css';
import './headers.css'
import App from './App';
import NDF from './NDF'
import registerServiceWorker from './registerServiceWorker';

const About = () => (
    <div>about</div>
)
const Topics = () => (
    <div>Topics</div>
)

class Root extends React.Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollTop: 0,
            scrollDirection: 'down'
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', _.throttle((e)=>this.handleScroll(e),10))
    }

    handleScroll(e){
        const delta = 15;
        this.setState((prevState)=>{
            return {
                scrollTop: (document.documentElement && document.documentElement.scrollTop) ||
                document.body.scrollTop,
                scrollDirection: (()=>{
                    const differ = prevState.scrollTop - document.body.scrollTop
                    if(differ > delta)
                        return 'up'
                    else if(differ < -delta)
                        return 'down'
                    else
                        return prevState.scrollDirection

                })()
            }
        })
    }
    render(){
        return (
            <Router>
                <div>
                    {/*
                     <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/NDF">Home</Link></li>
                     <li><Link to="/topics">Home</Link></li>
                     </ul>
                     */}

                    <Route exact path="/" component={App}/>
                    <Route path="/NDF" render={()=><NDF scrolltop={this.state.scrollTop} scrolldirection={this.state.scrollDirection}/>}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }

}


ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
