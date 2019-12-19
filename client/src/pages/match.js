import React, { Component } from "react";
import { Container } from '../components/Grid';
import Match from '../components/Match';

class MatchPage extends Component {
    state = {
        username: "",
        answers:[{
            gameDropdown: "League of Legends",
            levelDropdown: "Casual",
            trollDropdown: "Yes",
            skillDropdown: ""
            }]
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
