import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="uk-position-top">
                <nav
                    className="uk-navbar-container uk-navbar-transparent"
                    uk-navbar="true"
                >
                    <div className="uk-navbar-left">
                        <Link to="/">
                            <h1 id="logo" className="uk-margin-remove-bottom">
                                Craig Melville
                            </h1>
                        </Link>
                    </div>
                    <div className="uk-navbar-right">
                        <button
                            className="uk-hidden@s"
                            uk-toggle="target: #offCanvas"
                            type="button"
                        >
                            <span
                                uk-icon="icon: menu; ratio: 1.5"
                                className="menuIcon"
                            />
                        </button>
                        <ul className="uk-navbar-nav uk-visible@s nav-menu">
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="offCanvas" uk-offcanvas="true; flip: true">
                    <div className="uk-offcanvas-bar">
                        <button
                            className="uk-offcanvas-close"
                            type="button"
                            uk-close="true"
                        />

                        <ul className="uk-list nav-menu">
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
