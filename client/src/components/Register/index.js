import React from 'react';

function Register() {
    return (
        <div id= "regButton">
                <a class="btn btn-primary" href = "/register" role = "button">Register</a>
        </div>
    );
}

function Description() {
    return (
        <div id = "description">
            <p className = "appDescription"> Looking for Group is designed to help bring gamers together who don't typically have friends to play with online.
                <br/>
                Currently, trying to find groups of new people to play with online can be a challenge.
                <br/>
                We aim to extend that period with the hopes of creating long lasting friendships with people you enjoy gaming with.
                <br/>
                We aim to put all of this into a centralized location so that we are the one stop shop for finding others to play with.
            </p>
        </div>
    )
}

export default Register;
export default Description;