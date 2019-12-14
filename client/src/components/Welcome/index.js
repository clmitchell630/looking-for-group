import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import "./welcome.css";

function Welcome() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <div className="welcomeContainer">
            <div>
                <h2>Looking For Group</h2>
                <h6>Play Together.</h6>
            </div>
            <div className="welcome-g2">
                {isAuthenticated ?
                    <div>
                        <h6>Start searching!</h6>
                        <Link to='/matchform'>
                            <button className="welcome-btn" role="button">Get Started</button>
                        </Link>
                    </div> :
                    <div>
                        <h6>New?</h6>
                        <button className="welcome-btn" role="button" onClick={() => loginWithRedirect({})}>Sign in to get started</button>
                    </div>}
            </div>
        </div>
    );
}

export default Welcome;