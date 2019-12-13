import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Registration extends Component {

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Re-enter Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Link to="/matchform">
                    <button className="btn btn-primary">Submit</button>
                </Link>
            </form>
        );
    }
}

export default Registration;
