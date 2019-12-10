import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="nav barStyle">
                <div className="col-12">
                    <div className="row" >
                        {/*sign in button will toggle a modal*/}
                        <Link to={'/matchform'} className="nLinkStyle">
                            <div className="nav-link"><i className="fas fa-sign-in-alt"></i> Sign In</div>
                        </Link>
                        <Link to={'/about'} className="nLinkStyle">
                            <div className="nav-link">About</div>
                        </Link>
                        <Link to={'/'} className="nLinkStyle">
                            <div className="nav-link">Home</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
