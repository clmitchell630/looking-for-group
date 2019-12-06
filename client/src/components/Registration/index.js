import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component {

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" placeholder="Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Re-enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Link to="/matchform">
                    <button class="btn btn-primary">Submit</button>
                </Link>
            </form>
        );
    }
}

export default Registration;
