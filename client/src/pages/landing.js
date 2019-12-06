import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Register, Description } from '../components/Register';


class Landing extends Component {

    render() {
        return (
            <div>
                <div>
                    <Description />
                    <br />
                    <br />
                    <Register />
                </div>
            </div>

        );
    }
}

export default Landing;