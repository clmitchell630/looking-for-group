import React,  { Component } from "react";
import "../App.css";
import API from '../utils/API';
import { userInfo } from "os";

class Question extends Component {

    constructor() {
        super();
    this.state = {
        
        game: "",
        playLevel: "",
        troll: "",
        skillLevel: "",
        
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}



    handleInputChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        API.saveUser({
            game: this.state.game,
            playLevel: this.state.playLevel,
            troll: this.state.troll,
            skillLevel: this.state.skillLevel
        })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="Question">
                <br/>
                <h2 id="questionaireh">Pre-Matching Questionaire</h2>
                <br></br>
                <div className="jumbotron" id="jumbo">
                    <p>What game are you looking to group up in?</p>
                    <div className="dropdown">
                        <select onChange={this.handleInputChange} value={this.state.game} name="game">
                            <option value="League of Legends">League Of Legends</option>
                            <option value="Escape From Tarkov">>Escape From Tarkov</option>
                            <option value="Halo Reach">>Halo Reach</option>
                            <option value="Borderlands 3">>Borderlands 3</option>
                            <option value="Call of Duty: Black Ops 3">>Call of Duty: Black Ops 3</option>
                            <option value="Call of Duty: Modern Warfare">>Call of Duty: Modern Warfare</option>
                            <option value="BattleField 4">>BattleField 4</option>
                            <option value="BattleField 1">>BattleField 1</option>
                            <option value="Dota">>Dota</option>
                            <option value="Overwatch">>Overwatch</option>
                            <option value="World of Warcraft">>World of Warcraft</option>
                            <option value="Runescape">>Runescape</option>
                            <option value="Hearthstone">>Hearthstone</option>
                            <option value="Counter-Strike">>Counter-Strike</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Level of play</p>
                    <div className="dropdown">
                        <select onChange={this.handleInputChange} value={this.state.playLevel} name="playLevel">
                            <option value="Casual">Casual</option>
                            <option value="Competitive">Competitive</option>
                            <option value="Speed-Run">Speed-Run</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Troll or not?</p>
                    <div className="dropdown">
                        <select onChange={this.handleInputChange} value={this.state.troll} name="troll">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Skill level</p>
                    <div className="dropdown">
                        <select onChange={this.handleInputChange} value={this.state.skillLevel} name="skillLevel">
                            <option value="1">1(Hot Trash)</option>
                            <option value="2">2</option>
                            <option value="3">3(Average Joe)</option>
                            <option value="4">4</option>
                            <option value="5">5(Legendary)</option>
                        </select>
                    </div>
                </div>
                <div className="buttonDiv">
                    <button className="saveUser btn btn-primary" onClick={this.handleFormSubmit}>Save Results</button>
                </div>
            </div>
        );
    }
}

export default Question;