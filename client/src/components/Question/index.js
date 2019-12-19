import React, { Component } from 'react';
import API from '../../utils/API';
import Jumbotron from '../Jumbotron';
import './question.css'

class Question extends Component {

    state = {

        gameDropdown: "League of Legends",
        levelDropdown: "Casual",
        trollDropdown: "Yes",
        skillDropdown: "1",

    };

    handleInputChange = evt => {

        const { name, value } = evt.target;
        this.setState({ [name]: value });

    };

    handleRedirect = res => {
        if (res.status === 200) {
            console.log('foo2')
            console.log(this.props.history);
            this.props.history.push('/mymatch');
            console.log(this.props.history);
        }
    };
    
    handleFormSubmit = evt => {
        evt.preventDefault();
        console.log(this.state);
        API.saveUserAnswers({
            game: this.state.gameDropdown,
            playLevel: this.state.levelDropdown,
            troll: this.state.trollDropdown,
            skillLevel: this.state.skillDropdown
        }).then(res => {
            console.log('foo1')
            this.handleRedirect(res);
        })
    };


    render() {
        return (
            <div className="Question">
                <h2 id="questionaireh" className="questionaire-link">Who're You Looking For?</h2>
                <Jumbotron>
                    <p className="pSize">What game are you looking to group up in?</p>
                    <div className="dropdown">
                        <select value={this.state.gameDropdown} onChange={this.handleInputChange}  name="gameDropdown" className="dropStyle">
                            <option value="League of Legends">League Of Legends</option>
                            <option value="Escape From Tarkov">Escape From Tarkov</option>
                            <option value="Halo Reach">Halo Reach</option>
                            <option value="Borderlands 3">Borderlands 3</option>
                            <option value="Call of Duty: Black Ops 3">Call of Duty: Black Ops 3</option>
                            <option value="Call of Duty: Modern Warfare">Call of Duty: Modern Warfare</option>
                            <option value="BattleField 4">BattleField 4</option>
                            <option value="BattleField 1">BattleField 1</option>
                            <option value="Dota">Dota</option>
                            <option value="Overwatch">Overwatch</option>
                            <option value="World of Warcraft">World of Warcraft</option>
                            <option value="Runescape">Runescape</option>
                            <option value="Hearthstone">Hearthstone</option>
                            <option value="Counter-Strike">Counter-Strike</option>
                        </select>
                    </div>
                    <p className="pSize">Level of play</p>
                    <div className="dropdown">
                        <select value={this.state.levelDropdown} onChange={this.handleInputChange} name="levelDropdown" className="dropStyle">
                            <option value="Casual">Casual</option>
                            <option value="Competitive">Competitive</option>
                            <option value="Speed-Run">Speed-Run</option>
                        </select>
                    </div>
                    <p className="pSize">Troll or not?</p>
                    <div className="dropdown">
                        <select value={this.state.trollDropdown} onChange={this.handleInputChange} name="trollDropdown" className="dropStyle">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <p className="pSize">Skill level</p>
                    <div className="dropdown">
                        <select value={this.state.skillDropdown} onChange={this.handleInputChange} name="skillDropdown" className="dropStyle">
                            <option value="1">1(Hot Trash)</option>
                            <option value="2">2</option>
                            <option value="3">3(Average Joe)</option>
                            <option value="4">4</option>
                            <option value="5">5(Legendary)</option>
                        </select>
                    </div>
                    <div className="buttonDiv">
                        <button className="sub-btn" onClick={this.handleFormSubmit}>Save Results</button>
                    </div>

                </Jumbotron>

            </div>
        );
    }
}

export default Question;
