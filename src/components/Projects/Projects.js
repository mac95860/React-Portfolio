import React from 'react';
import './projects.css';

const style = {
    card: {
        width: "18 rem"
    }
}

function Projects() {
    return (
        <div className="container mb-5">
            <div className="card mb-5">
                <div className="card-header shadow">
                    Portfolio
                </div>

                <div className="card-body" id="portfolio">

                    <div className="row d-flex justify-content-around">
                        <div className="col-md-4 col-xs-12 card shadow firstRow portfolioItem " style={style.card}>
                            <img src={require("../../images/Password-Gen.JPG")} className="card-img-top" alt="Password Generator" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://mac95860.github.io/Password-Generator/" target="_blank" className="siteLinks">Password Generator</a>
                                creates a random password that contains numbers, letters, and special characters.
                            </p>
                                <a href="https://github.com/mac95860/Password-Generator" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12  card shadow firstRow portfolioItem" style={style.card}>
                            <img src={require("../../images/weatherApp.JPG")} className="card-img-top" alt="Weather Application" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://mac95860.github.io/Weather-app/" target="_blank" className="siteLinks">Weather Application</a>
                                that displays the weather of the city the user has requested.
                            </p>
                                <a href="https://github.com/mac95860/Weather-app" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around mt-4">
                        <div className="col-md-4 col-xs-12 card shadow secondRow portfolioItem" style={style.card}>
                            <img src={require("../../images/Inside-Outside.JPG")} className="card-img-top" alt="Cocktail Generator" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://mac95860.github.io/inside-or-outside/" target="_blank" className="siteLinks">Inside or Outside</a>
                            asks the user on whether or not they want to go outside.
                            Depending on their answer, it will return either the weather or a random cocktail.
                            </p>
                                <a href="https://github.com/mac95860/inside-or-outside" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 card shadow secondRow portfolioItem" style={style.card}>
                            <img src={require("../../images/Team Creator.png")} className="card-img-top" alt="Cocktail Generator" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://www.youtube.com/watch?v=ZyGGyhxkmWc" target="_blank" className="siteLinks">Create Your Team</a>
                            Application that allows users to create and render information about their team of employees via node.
                            </p>
                                <a href="https://github.com/mac95860/CreateYourTeam" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-around mt-4">
                        <div className="col-md-4 col-xs-12 card shadow secondRow portfolioItem" style={style.card}>
                            <img src={require("../../images/Capture.JPG")} className="card-img-top" alt="Cocktail Generator" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://orm-burgers.herokuapp.com/" target="_blank">Eat-The-Burger</a>
                            ORM application that adds and updates a MySQL database of burgers
                            </p>
                                <a href="https://github.com/mac95860/ORM" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12 card shadow secondRow portfolioItem" style={style.card}>
                            <img src={require("../../images/NoteTaker.JPG")} className="card-img-top" alt="Note Taker" />
                            <div className="card-body">
                                <p className="card-text">
                                    <a href="https://note-takingapplication.herokuapp.com/" target="_blank" className="siteLinks">Note Taker</a>
                            Simple note taking app
                            </p>
                                <a href="https://github.com/mac95860/noteTaker" className="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;