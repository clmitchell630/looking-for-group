import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Register from '../components/Register'
import Description from '../components/Register'

class Landing extends Component {

    render() {
        return (
            <Container fluid>
                <Navbar>

                </Navbar>
                <Container>
                    <Description />
                    <br />
                    <br />
                    <Register />
                </Container>
            </Container>
        )
    }
}

export default Landing;