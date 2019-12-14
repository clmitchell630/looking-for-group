import React from 'react';
import { Container } from '../Grid';
import './jumbotron.css';

function Jumbotron({ children }) {
    return (
        <Container>
            <div className="jumbotron addStyle">
                <p>{children}</p>
            </div>
        </Container>
    );
}

export default Jumbotron;
