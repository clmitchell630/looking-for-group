import React from 'react';
import { Container } from '../Grid';

function Jumbotron({ children }) {
    return (
        <Container>
            <div className="jumbotron">
                <h1 className="display-4">Looking for Group</h1>

                <hr className="my-4" />
                <h4></h4>
                <p>{children}</p>
            </div>
        </Container>
    );
}

export default Jumbotron;
