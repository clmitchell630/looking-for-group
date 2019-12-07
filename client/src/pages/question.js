import React, { Component } from "react";
import "../App.css";
import API from '../utils/API';
import { userInfo } from "os";
import { Link } from 'react-router-dom';

class Question extends Component {

    state = {

        gameDropdown: "",
        levelDropdown: "",
        trollDropdown: "",
        skillDropdown: "",

    };




    handleInputChange = evt => {

        const { name, value } = evt.target;
        this.setState({ [name]: value });

    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
        API.saveUser({
            game: this.state.gameDropdown,
            playLevel: this.state.levelDropdown,
            troll: this.state.trollDropdown,
            skillLevel: this.state.skillDropdown
        })
            .then(res => console.log("success"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="Question">
                <br />
                <h2 id="questionaireh">Pre-Matching Questionaire</h2>
                <br></br>
                <div className="jumbotron" id="jumbo">
                    <p>What game are you looking to group up in?</p>
                    <div className="dropdown">
                        <select onChange={this.handleInputChange} value={this.state.gameDropdown} name="gameDropdown">
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
                        <select value={this.state.levelDropdown} onChange={this.handleInputChange} name="levelDropdown">
                            <option value="Casual">Casual</option>
                            <option value="Competitive">Competitive</option>
                            <option value="Speed-Run">Speed-Run</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Troll or not?</p>
                    <div className="dropdown">
                        <select value={this.state.trollDropdown} onChange={this.handleInputChange} name="trollDropdown">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Skill level</p>
                    <div className="dropdown">
                        <select value={this.state.skillDropdown} onChange={this.handleInputChange} name="skillDropdown">
                            <option value="1">1(Hot Trash)</option>
                            <option value="2">2</option>
                            <option value="3">3(Average Joe)</option>
                            <option value="4">4</option>
                            <option value="5">5(Legendary)</option>
                        </select>
                    </div>
                    <br></br>

                    <div className="buttonDiv">
                        <Link to="/yourmatch">
                            {/*remember to add back the  onClick={this.handleFormSubmit}*/}
                            <button className="saveUser btn btn-primary">Save Results</button>
                        </Link>
                    </div>

                </div>

            </div>
        );
    }
}

export default Question;