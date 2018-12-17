import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./fonts/geometria-light-webfont.woff";
import "./css/grid.css";
import "./css/layout.css";
import "./css/index.css";
import "./css/headers.css";
import Home from "./Home";
import NDF from "./NDF";
import Conviot from "./Conviot";
import Twitch from "./Twitch";
import registerServiceWorker from "./registerServiceWorker";

const About = () => <div>about</div>;
const Topics = () => <div>Topics</div>;

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollTop: 0,
      scrollDirection: "down"
    };
  }
  componentDidMount() {
    window.addEventListener(
      "scroll",
      _.throttle(e => this.handleScroll(e), 10)
    );
  }

  handleScroll(e) {
    const delta = 15;
    this.setState(prevState => {
      return {
        scrollTop:
          (document.documentElement && document.documentElement.scrollTop) ||
          document.body.scrollTop,
        scrollDirection: (() => {
          const differ = prevState.scrollTop - document.body.scrollTop;
          if (differ > delta) return "up";
          else if (differ < -delta) return "down";
          else return prevState.scrollDirection;
        })()
      };
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Home scrolltop={this.state.scrollTop} />}
          />
          <Route
            path="/twitch"
            render={() => (
              <Twitch
                scrolltop={this.state.scrollTop}
                scrolldirection={this.state.scrollDirection}
              />
            )}
          />
          <Route
            path="/NDF"
            render={() => (
              <NDF
                scrolltop={this.state.scrollTop}
                scrolldirection={this.state.scrollDirection}
              />
            )}
          />
          <Route
            path="/CONVIoT"
            render={() => (
              <Conviot
                scrolltop={this.state.scrollTop}
                scrolldirection={this.state.scrollDirection}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
