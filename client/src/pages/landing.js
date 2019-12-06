import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Description from '../components/Register';

class Landing extends Component {

    render() {
        return (
            <div>
                <Navbar>

                </Navbar>
                <div>
                    <Description />
                    <br />
                    <br />
                    <Register />
                </div>
            </div>

        )
    }
}

export default Landing;