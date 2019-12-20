import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import { Container, Row, Col } from '../Grid';

import './match.css';
import API from '../../utils/API';

class Match extends Component {
    
    state = {
        name:"",
        nameAnswers: {
            game:"",
            playLevel:"",
            troll:"",
            skillLevel:""
        },
        matches:[
            /*
            {
                matchName: "",
                answers: {
                    game:"",
                    playLevel:"",
                    troll:"",
                    skillLevel:""
                }
            } 
            */
        ]
    };

    componentDidMount() {
        let userid = this.props.history.location.pathname.split ("/")
        userid = userid[2];
        console.log(userid);
        this.loadUserMatch(userid);
    }

    loadUserMatch = (userid) => {
        API.getUser(userid)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
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
