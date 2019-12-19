import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import { Container } from '../components/Grid';

class Landing extends Component {

    render() {
        return (
            <Container>
                <Welcome history={this.props.history} />
            </Container>
        );
    }
}

export default Landing;
