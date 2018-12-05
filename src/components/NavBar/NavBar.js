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
                        <h1 id="logo" className="uk-margin-remove-bottom">
                            Craig Melville
                        </h1>
                    </div>
                    <div className="uk-navbar-right">
                        <button
                            className="uk-hidden@s"
                            uk-toggle="target: #offCanvas"
                            type="button"
                        >
                            <span uk-icon="menu" />
                        </button>
                        <ul
                            className="uk-navbar-nav uk-visible@s"
                            id="nav-menu"
                        >
                            <li>
                                <Link to="/">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
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

                        <h3>Title</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
