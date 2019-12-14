import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import "./navbar.css";

function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div>
            <nav className="nav barStyle">
                {/*sign in button will toggle a modal*/}
                <div className="nav-link">
                    {!isAuthenticated && (
                        <div className="nLinkStyle" onClick={() => loginWithRedirect({})}><i className="fas fa-sign-in-alt"></i> Sign In</div>
                    )}

                    {isAuthenticated && <div className="nLinkStyle" onClick={() => logout()}><i className="fas fa-sign-out-alt"></i> Sign out</div>}
                </div>
                <div className="nav-link">
                    <Link to={'/about'} className="nLinkStyle">About</Link>
                </div>
                <div className="nav-link">
                    <Link to={'/'} className='nLinkStyle'>Home</Link>
                </div>
            </nav >
        </div >
    );
}

export default Navbar;
