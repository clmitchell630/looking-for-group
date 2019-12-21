import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import { Container, Row, Col } from '../Grid';
import './match.css';
import API from '../../utils/API';

class Match extends Component {

    state = {
        name: {},
        nameAnswers: {},
        matches: [],
        myMatch: {
            useranswers:""
        }
    };

    componentDidMount() {
        let userid = this.props.history.location.pathname.split("/")
        userid = userid[2];
        console.log(userid);
        this.loadUser(userid);
    }

    getMyMatches = () => {
        API.getMatch()
            .then(res => {
                console.log("API.getMatch response data:")
                console.log(res.data);
                this.setState({ matches: res.data });
                console.log("after gathering all people");
                console.log(this.state);
            })
            .then(() => {
                let matchArr = this.state.matches;
                console.log(matchArr[0].useranswers.game);
                for (let i = 0; i < matchArr.length; i++) {
                    if (matchArr[i].email === this.state.name.email) {
                        console.log("USER");
                    }
                    else if (matchArr[i].useranswers.game === this.state.nameAnswers.game) {

                        if (matchArr[i].useranswers.playLevel === this.state.nameAnswers.playLevel) {

                            if (matchArr[i].useranswers.troll === this.state.nameAnswers.troll) {

                                if (
                                    parseInt(matchArr[i].useranswers.skillLevel) === parseInt(this.state.nameAnswers.skillLevel) ||
                                    parseInt(matchArr[i].useranswers.skillLevel) === parseInt(this.state.nameAnswers.skillLevel) + 1 ||
                                    parseInt(matchArr[i].useranswers.skillLevel) === parseInt(this.state.nameAnswers.skillLevel) - 1) {
                                    this.setState({ myMatch: matchArr[i] });
                                    console.log(this.state.myMatch);
                                }

                            }

                        }
                    }
                }
            })
            .catch(err => console.log(err));

    }

    loadUser = (userid) => {
        API.getUser(userid)
            .then(res => {
                console.log("API.getUser response data:")
                console.log(res.data);
                this.setState({
                    name: {
                        username: res.data.username,
                        email: res.data.email
                    },
                    nameAnswers: {
                        game: res.data.useranswers.game,
                        playLevel: res.data.useranswers.playLevel,
                        troll: res.data.useranswers.troll,
                        skillLevel: res.data.useranswers.skillLevel
                    }
                });
                console.log("loadUser -> updated state:")
                console.log(this.state);

            })
            .then(() => this.getMyMatches())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="aboutContainer">
                <div className="about-group1">
                    <h2>Hello {this.state.name.username}</h2>
                    <h6>Here is your match!</h6>
                </div>

                <Container>

                    <Container>
                        <Row>
                            <Col size="6">
                                <Jumbotron>
                                    <div >
                                        <h3>Your Answers</h3>
                                        <ul className="list-unstyled">
                                            <li>Username: <span className="resultsStyle">{this.state.name.username}</span></li>
                                            <li>Email: <span className="resultsStyle">{this.state.name.email}</span></li>
                                            <li>Game: <span className="resultsStyle">{this.state.nameAnswers.game}</span></li>
                                            <li>Play Level: <span className="resultsStyle">{this.state.nameAnswers.playLevel}</span></li>
                                            <li>Troll?: <span className="resultsStyle">{this.state.nameAnswers.troll}</span></li>
                                            <li>Skill Level: <span className="resultsStyle">{this.state.nameAnswers.skillLevel}</span></li>
                                        </ul>
                                    </div>
                                </Jumbotron>
                            </Col>
                            <Col size="6">
                                <Jumbotron>
                                    <h3>Their Answers</h3>
                                    <ul className="list-unstyled">
                                        <li>Username: <span className="resultsStyle">{this.state.myMatch.username}</span></li>
                                        <li>Email: <span className="resultsStyle">{this.state.myMatch.email}</span></li>
                                        <li>Game: <span className="resultsStyle">{this.state.myMatch.useranswers.game}</span></li>
                                        <li>Play Level: <span className="resultsStyle">{this.state.myMatch.useranswers.playLevel}</span></li>
                                        <li>Troll?: <span className="resultsStyle">{this.state.myMatch.useranswers.troll}</span></li>
                                        <li>Skill Level: <span className="resultsStyle">{this.state.myMatch.useranswers.skillLevel}</span></li>
                                    </ul>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>

                </Container>

            </div>

        );
    }
}

// class Answers {
//     constructor(game, playLevel, troll, skillLevel) {
//         this.game = game;
//         this.playLevel = playLevel;
//         this.troll = troll;
//         this.skillLevel = skillLevel;
//     }
// }
// class Player {
//     constructor(name, answers) {
//         this.name = name;
//         this.answers = {
//             game: answers.game,
//             playLevel: answers.playLevel,
//             troll: answers.troll,
//             skillLevel: answers.skillLevel
//         }
//     }
// }
// var ans = new Answers("WoW", "scrub", "yes", "0");
// var match = new Player("bob", ans);


export default Match;
