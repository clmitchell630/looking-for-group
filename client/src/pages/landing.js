import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Register, Description } from '../components/Register';
import { Col, Row, Container } from '../components/Grid';


class Landing extends Component {

    render() {
        return (
            <div>
                <Container>
                <div>
                    <Description />
                    <br />
                    <br />
                    <Register />
                </div>
                </Container>
            </div>

        );
    }
}

export default Landing;