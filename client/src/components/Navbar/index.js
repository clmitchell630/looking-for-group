import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="nav">
                <div className="col-12">
                    <div className="row" >
                        <Link to={'/'}>
                           <span className="nav-link">[LOGO]</span>
                        </Link>
                        <Link to={'/about'}>
                            <span className="nav-link">What's this?</span>
                        </Link>
                        <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sign-in
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <form className="dropdown-menu p-4">
                                <div className="form-group">
                                    <label for="exampleDropdownFormEmail2">Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleDropdownFormPassword2">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                        <label className="form-check-label" for="dropdownCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
