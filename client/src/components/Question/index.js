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
                            <option value="Anthem">Anthem</option>
                            <option value="H1Z1">H1Z1</option>
                            <option value="Halo Wars 2">Halo Wars 2</option>
                            <option value="EA Sports UFC 3">EA Sports UFC 3</option>
                            <option value="7 Days to Die">7 Days to Die</option>
                            <option value="Ark: Survival Evolved">Ark: Survival Evolved</option>
                            <option value="Injustice 2">Injustice 2</option>
                            <option value="Tom Clancy's Ghost Recon Wildlands">Tom Clancy's Ghost Recon Wildlands</option>
                            <option value="Killing Floor 2">Killing Floor 2</option>
                            <option value="Splatoon 2">Splatoon 2</option>
                            <option value="Overcooked!">Overcooked!</option>
                            <option value="Mario Tennis Aces">Mario Tennis Aces</option>
                            <option value="Tetris 99">Tetris 99</option>
                            <option value="Payday 2">Payday 2</option>
                            <option value="Worms W.M.D">Worms W.M.D</option>
                            <option value="Sea of Thieves">Sea of Thieves</option>
                            <option value="Portal 2">Portal 2</option>
                            <option value="Dead Space 3">Dead Space 3</option>
                            <option value="Monster Hunter: World">Monster Hunter: World</option>
                            <option value="Assassin's Creed: Unity">Assassin's Creed: Unity</option>
                            <option value="Syndicate">Syndicate</option>
                            <option value="A Way Out">A Way Out</option>
                            <option value="Absolver">Absolver</option>
                            <option value="World War Z">World War Z</option>
                            <option value="Need for Speed">Need for Speed</option>
                            <option value="Sniper Elite 3">Sniper Elite 3</option>
                            <option value="Far Cry 5">Far Cry 5</option>
                            <option value="Dead by Daylight">Dead by Daylight</option>
                            <option value="Paladins">Paladins</option>
                            <option value="Team Fortress 2">Team Fortress 2</option>
                            <option value="Dragon Ball FighterZ">Dragon Ball FighterZ</option>
                            <option value="Unreal Tournament">Unreal Tournament</option>
                            <option value="Quake Champions">Quake Champions</option>
                            <option value="For Honor">For Honor</option>
                            <option value="Tom Clancy's The Division 2">Tom Clancy's The Division 2</option>
                            <option value="Dead Island 2">Dead Island 2</option>
                            <option value="Dying Light">Dying Light</option>
                            <option value="NHL 20">NHL 20</option>
                            <option value="Heroes of the Storm">Heroes of the Storm</option>
                            <option value="Star Wars Battlefront II">Star Wars Battlefront II</option>
                            <option value="Gears of War 5">Gears of War 5</option>
                            <option value="Mortal Kombat 11">Mortal Kombat 11</option>
                            <option value="Street Fighter V">Street Fighter V</option>
                            <option value="Tekken 7">Tekken 7</option>
                            <option value="StarCraft II">StarCraft II</option>
                            <option value="Diablo III">Diablo III</option>
                            <option value="Super Smash Bros. Ultimate">Super Smash Bros. Ultimate</option>
                            <option value="Madden NFL 20">Madden NFL 20</option>
                            <option value="Warframe">Warframe</option>
                            <option value="World of Tanks">World of Tanks</option>
                            <option value="Smite">Smite</option>
                            <option value="Red Dead Redemption 2">Red Dead Redemption 2</option>
                            <option value="NBA 2K20">NBA 2K20</option>
                            <option value="Rocket League">Rocket League</option>
                            <option value="Pokemon Sword/Shield">Pokemon Sword/Shield</option>
                            <option value="Tom Clancy's Rainbow Six: Siege">Tom Clancy's Rainbow Six: Siege</option>
                            <option value="Grand Theft Auto V">Grand Theft Auto V</option>
                            <option value="Titanfall 2">Titanfall 2</option>
                            <option value="Apex Legends">Apex Legends</option>
                            <option value="FIFA 20">FIFA 20</option>
                            <option value="Minecraft">Minecraft</option>
                            <option value="PUBG">PUBG</option>

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