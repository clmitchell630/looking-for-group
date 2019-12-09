import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

export function Register() {
    return (
        <Link to='/register'>
            <div id="regButton">
                <button className="btn btn-primary" id="regbtn" role="button">Register</button>
            </div>
        </Link>
    );
}

export function Description() {
    return (
        <div id="description">
            <p id="hdr">Looking For Group</p>
            <br />
            <p className="appDescription"> Looking for Group is designed to help bring gamers together who don't typically have friends to play with online.
                <br />
                Currently, trying to find groups of new people to play with online can be a challenge.
                <br />
                We aim to extend that period with the hopes of creating long lasting friendships with people you enjoy gaming with.
                <br />
                We aim to put all of this into a centralized location so that we are the one stop shop for finding others to play with.
            </p>
        </div>
    )
}
