import React, { Component } from "react";
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
        return (
            <Container>
                <div className="jumbotron" id="jumbo">
                    <h2>Your Match!</h2>
                    <h5>
                        Username: Connander
                    </h5>
                    <h5>
                        Game: Halo Reach
                    </h5>
                    <h5>
                        Play Level: Casual
                    </h5>
                    <h5>
                        Troll?: No
                    </h5>
                    <h5>
                        Skill Level: 1
                    </h5>
                    <h2>
                        Connect!
                    </h2>
                    <h5>wolves3777@gmail.com</h5>
                </div>
            </Container>
        );
    }
}

export default Match;
