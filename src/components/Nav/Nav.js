import React from 'react';
import "./nav.css";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky w-100">
                <a className="navbar-brand" href="./index.html" id="Name">Michael Cervantes</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutme">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactme">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Full Stack Developer
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nav;