import React, {Component} from "react";
import { ThumbsBttns, lastMatch } from "../components/Match";
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';

class Match extends Component {
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
        return(
            <Container>
                <lastMatch />
                 
            </Container>
        );
    }
}

export default Match;
