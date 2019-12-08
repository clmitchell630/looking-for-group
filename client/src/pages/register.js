import React, { Component } from 'react';
import Registration from '../components/Registration';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

class Register extends Component {

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Registration />
                </Jumbotron>
            </Container>
        );
    }
}

export default Register;
