import React from 'react';
import "./nav.css";

function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
                <a class="navbar-brand" href="./index.html" id="Name">Michael Cervantes</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/aboutme">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contactme">Contact</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Full Stack Developer
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Nav;