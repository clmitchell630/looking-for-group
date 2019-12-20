import React from 'react';
import { Container } from '../Grid';
import './jumbotron.css';

function Jumbotron({ children }) {
    return (
        <Container>
            <div className="jumbotron addStyle">
                <div>{children}</div>
            </div>
        </Container>
    );
}

export default Jumbotron;
