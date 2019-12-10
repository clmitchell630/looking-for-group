import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';


class Landing extends Component {

    render() {
        return (
            <Container>
                <Welcome />
            </Container>
        );
    }
}

export default Landing;