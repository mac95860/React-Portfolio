import React from "react";
import "./jumbotron.css";


function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid min-vh-100">
            <div class="container-fluid vh-100">
                <div class="container text-center">
                    <h1 class="display-1">About Me</h1>
                    <img src="../../images/me.jpg" alt="portrait" class="rounded-circle shadow"/>
                    <p class="lead  rounded vw-75"> I am a web developer familiar with several different programming languages and frameworks including
                        JavaScript, JQuery, Node.js, Express.js, Passport.js, and Handlebars.js. Also, I have worked with styling languages such as CSS, Bootstrap4,
                        and Bulma. In the projects I have worked on I have worked both with MySQL and NoSQL databases such as MongoDB. Other tools I have used are Test
                        Driven Development, Object Oriented Programming, and Object-Relational Mapping.
                    </p>
                
                </div>
            </div>
        </div>

    )
}

export default Jumbotron;