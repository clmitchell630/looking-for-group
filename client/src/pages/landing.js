import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

class Landing extends Component {

    render() {
        return (
            <div>
            <Navbar>
                
            </Navbar>

            <header class="main-header" style="text-align: center;">
        <h1>Looking for Group</h1>
        </header>
        <div class="about-app">
            <h3>About LFG:</h3>
            <br></br>
            <p> Looking for Group is designed to help bring gamers together who don't typically have friends to play with online.
                <br />
                Currently, trying to find groups of new people to play with online can be a challenge.
                <br />
                We aim to extend that period with the hopes of creating long lasting friendships with people you enjoy gaming with.
                <br />
                We aim to put all of this into a centralized location so that we are the one stop shop for finding others to play with.
            </p>
            
            </div>

        <div class="footer">
            <p> Copyright © 2019 Looking for Group </p>
        </div>

        
        </div>

        );
    }
}

export default Landing;