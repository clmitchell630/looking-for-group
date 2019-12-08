import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Register, Description } from '../components/Register';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';


class Landing extends Component {

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <Jumbotron>
                            <Description />

                            <br />
                            <br />
                            <Register />
                        </Jumbotron>
                    </div>
                </Container>
            </div>

        );
    }
}

export default Landing;