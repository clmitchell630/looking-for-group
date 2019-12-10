import React from 'react';
import { Link } from 'react-router-dom';
import "./welcome.css";

function Welcome() {
    return (
        <div className="welcomeContainer">
            <div>
                <h2>Looking For Group</h2>
                <h6>Play Together</h6>
            </div>
            <div className="welcome-g2">
                <h6>New?</h6>
                <Link to='/register'>
                    <div id="regButton">
                        <button className="welcome-btn" role="button">Get Started</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;