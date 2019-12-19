import React from 'react';
import Jumbotron from '../Jumbotron';
import { Container, Row, Col } from '../Grid';

import './match.css';

function Match() {
    return (
        <div className="aboutContainer">
            <div className="about-group1">
                <h2>Your Match!</h2>
            </div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col size="4"></Col>
                        <Col size="4">
                            <h5>Username: Connander</h5>
                            <h5>Game: Halo Reach</h5>
                            <h5>Play Level: Casual</h5>
                            <h5>Troll?: No</h5>
                            <h5>Skill Level: 1</h5>
                            <h4>Connect!</h4>
                            <h5>wolves3777@gmail.com</h5>
                        </Col>
                        <Col size="4"></Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>

    );
}

export default Match;
