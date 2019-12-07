import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="col-12">
                    <div className="row" >
                        <Link to={'/'}>
                            <span className="nav-link">LFG</span>
                        </Link>
                        <Link to={'/about'}>
                            <span className="nav-link">What's this?</span>
                        </Link>
                        <Link to={'/matchform'}>
                            <button type="button" className="btn btn-link dropdown-toggle">
                                Sign-in
                            </button>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <form className="dropdown-menu p-4">
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                        <label className="form-check-label" htmlFor="dropdownCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
