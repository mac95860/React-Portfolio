import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer class="fixed-bottom d-flex justify-content-center flex-column p-2 ">
            <div class="container text-center mt-0">
                <a href="https://www.linkedin.com/in/macervantes90/" target="_blank"><i class="fab fa-linkedin fa-lg mx-1" ></i></a>
                <a href="https://github.com/mac95860" target="_blank"><i class="fab fa-github fa-lg mx-1"></i></a>
            </div>
            <small class="text-center">&copy; Michael Cervantes</small>
        </footer>
    )
}

export default Footer;