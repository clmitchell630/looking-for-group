import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';


class Landing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Welcome history={this.props.history} />
            </Container>
        );
    }
}

export default Landing;