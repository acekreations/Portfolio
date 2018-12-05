import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

class App extends Component {
    state = {
        bg: "home.mp4"
    };

    changeBG = newBG =>
        this.setState({
            bg: newBG
        });

    render() {
        return (
            <Router>
                <div className="uk-cover-container uk-height-viewport">
                    <video autoPlay loop muted playsInline uk-cover="true">
                        <source
                            src={"./assets/" + this.state.bg}
                            type="video/mp4"
                        />
                    </video>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Home changeBG={this.changeBG} />}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
