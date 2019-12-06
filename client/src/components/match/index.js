import React from 'react';
import { PromiseProvider } from 'mongoose';
import { Row } from '../Grid';

export function ThumbsBttns(props) {
    return (
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary" onClick={() => props.handleThumbsUpButton()}>
                <span class="glyphicon glyphicon-thumbs-up" />
            </button>
            <button type="button" class="btn btn-secondary">
                <span class="glyphicon glyphicon-thumbs-down" />
            </button>
        </div>
    )
}


export function SomethingDifferent() {

}

export function LastMatch(props) {
    return (
        <div className="card">
            <div className="card-body player">
                <h3>Your last match</h3>
                {props.lastMatch.map(savedMatch => {
                    return (
                        <li className="saved-list list-group-item">
                            <Row className="MatchResult" id={savedMatch.Name + "Card"} key={savedMatch._id}>
                                <Row>
                                    <h2 className="MatchName">{savedMatch.name}</h2>
                                </Row>
                                <Row>
                                    <h2 className="MatchGame">{savedMatch.game}</h2>
                                </Row>
                                <Row>
                                    <h2 className="MatchPlay">{savedMatch.playLevel}</h2>
                                </Row>
                                <Row>
                                    <h2 className="MatchTroll">{savedMatch.troll}</h2>
                                </Row>
                                <Row>
                                    <h2 className="MatchSkill">{savedMatch.skillLevel}</h2>
                                </Row>
                            </Row>
                        </li>
                    )

                })
                }

            </div>
        </div>
    );
}
