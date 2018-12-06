import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <div>
                                <Home />
                                <Portfolio />
                            </div>
                        )}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
