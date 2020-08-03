import React from 'react';
import './projects.css'
import '../../../public/images'

function Projects() {
    return (
        <div class="container mb-5">
            <div class="card mb-5">
                <div class="card-header shadow">
                    Portfolio
                </div>

                <div class="card-body" id="portfolio">

                    <div class="row d-flex justify-content-around">
                        <div class="card shadow firstRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/Password-Gen.JPG" class="card-img-top" alt="Password Generator" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://mac95860.github.io/Password-Generator/" target="_blank" class="siteLinks">Password Generator</a>
                                creates a random password that contains numbers, letters, and special characters.
                            </p>
                                <a href="https://github.com/mac95860/Password-Generator" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div class="card shadow firstRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/weatherApp.JPG" class="card-img-top" alt="Weather Application" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://mac95860.github.io/Weather-app/" target="_blank" class="siteLinks">Weather Application</a>
                                that displays the weather of the city the user has requested.
                            </p>
                                <a href="https://github.com/mac95860/Weather-app" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-around mt-4">
                        <div class="card shadow secondRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/Inside-Outside.JPG" class="card-img-top" alt="Cocktail Generator" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://mac95860.github.io/inside-or-outside/" target="_blank" class="siteLinks">Inside or Outside</a>
                            asks the user on whether or not they want to go outside.
                            Depending on their answer, it will return either the weather or a random cocktail.
                            </p>
                                <a href="https://github.com/mac95860/inside-or-outside" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div class="card shadow secondRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/Team Creator.png" class="card-img-top" alt="Cocktail Generator" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://www.youtube.com/watch?v=ZyGGyhxkmWc" target="_blank" class="siteLinks">Create Your Team</a>
                            Application that allows users to create and render information about their team of employees via node.
                            </p>
                                <a href="https://github.com/mac95860/CreateYourTeam" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-around mt-4">
                        <div class="card shadow secondRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/Capture.JPG" class="card-img-top" alt="Cocktail Generator" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://orm-burgers.herokuapp.com/" target="_blank">Eat-The-Burger</a>
                            ORM application that adds and updates a MySQL database of burgers
                            </p>
                                <a href="https://github.com/mac95860/ORM" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>

                        <div class="card shadow secondRow portfolioItem" style="width: 18rem;">
                            <img src="../../../public/images/NoteTaker.JPG" class="card-img-top" alt="Note Taker" />
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="https://note-takingapplication.herokuapp.com/" target="_blank" class="siteLinks">Note Taker</a>
                            Simple note taking app
                            </p>
                                <a href="https://github.com/mac95860/noteTaker" class="siteLinks" target="_blank">Checkout the Repo!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;