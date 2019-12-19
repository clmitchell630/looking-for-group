import React, { Component } from "react";
import { Container } from '../components/Grid';
import Match from '../components/Match';

class MatchPage extends Component {
    state = {
        lastMatch: []
    };

    // componentDidMount() {
    //     API.getMatch()
    //     .then(res => this.setState({lastMatch: res.data}))
    //     .catch(err => console.log(err))
    // }

    handleThumbsUpButton = savedMatch => {


    }

    render() {
        return (
            <Container>
                    <Match />
            </Container>
        );
    }
}

export default MatchPage;
