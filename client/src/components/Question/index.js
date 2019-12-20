import React, { Component } from 'react';
import API from '../../utils/API';
import Jumbotron from '../Jumbotron';
import './question.css'
import Select from 'react-select';

const options = [
	{ value: 'League of Legends', label: 'League of Legends' },
	{ value: 'Escape from Tarkov', label: 'Escape from Tarkov' },
	{ value: 'Halo Reach', label: 'Halo Reach' },
	{ value: 'Borderlands 3', label: 'Borderlands 3' },
	{ value: 'Call of Duty: Black Ops 3', label: 'Call of Duty: Black Ops 3' },
	{ value: 'Call of Duty: Modern Warfare', label: 'Call of Duty: Modern Warfare' },
	{ value: 'Battlefield 4', label: 'Battlefield 4' },
	{ value: 'Battlefield 1', label: 'Battlefield 1' },
	{ value: 'Dota', label: 'Dota' },
	{ value: 'Overwatch', label: 'Overwatch' },
	{ value: 'World of Warcraft', label: 'World of Warcraft' },
	{ value: 'RuneScape', label: 'RuneScape' },
	{ value: 'Hearthstone', label: 'Hearthstone' },
    { value: 'Counter-Strike', label: 'Counter-Strike' },
    { value: 'PUBG', label: 'PUBG' },
    { value: 'Minecraft', label: 'Minecraft' },
    { value: 'FIFA 20', label: 'FIFA 20' },
    { value: 'Apex Legends', label: 'Apex Legends' },
    { value: 'Titanfall 2', label: 'Titanfall 2' },
    { value: 'Grand Theft Auto V', label: 'Grand Theft Auto V' },
    { value: "Tom Clancy's Rainbow Six: Siege", label: "Tom Clancy's Rainbow Six: Siege" },
    { value: 'Pokemon Sword/Shield', label: 'Pokemon Sword/Shield' },
    { value: 'Rocket League', label: 'Rocket League' },
    { value: 'NBA 2K20', label: 'NBA 2K20' },
    { value: 'Red Dead Redemption 2', label: 'Red Dead Redemption 2' },
    { value: 'Smite', label: 'Smite' },
    { value: 'World of Tanks', label: 'World of Tanks' },
    { value: 'Warframe', label: 'Warframe' },
    { value: 'Madden NFL 20', label: 'Madden NFL 20' },
    { value: 'Super Smash Bros. Ultimate', label: 'Super Smash Bros. Ultimate' },
    { value: 'Diablo III', label: 'Diablo III' },
    { value: 'StarCraft II', label: 'StarCraft II' },
    { value: 'Tekken 7', label: 'Tekken 7' },
    { value: 'Street Fighter V', label: 'Street Fighter V' },
    { value: 'Mortal Kombat 11', label: 'Mortal Kombat 11' },
    { value: 'Gears of War 5', label: 'Gears of War 5' },
    { value: 'Star Wars Battlefront II', label: 'Star Wars Battlefront II' },
    { value: 'Heroes of the Storm', label: 'Heroes of the Storm' },
    { value: 'NHL 20', label: 'NHL 20' },
    { value: 'Dying Light', label: 'Dying Light' },
    { value: 'Dead Island 2', label: 'Dead Island 2' },
    { value: "Tom Clancy's The Division 2", label: "Tom Clancy's The Division 2" },
    { value: 'For Honor', label: 'For Honor' },
    { value: 'Quake Champions', label: 'Quake Champions' },
    { value: 'Unreal Tournament', label: 'Unreal Tournament' },
    { value: 'Dragon Ball FighterZ', label: 'Dragon Ball FighterZ' },
    { value: 'Team Fortress 2', label: 'Team Fortress 2' },
    { value: 'Paladins', label: 'Paladins' },
    { value: 'Dead by Daylight', label: 'Dead by Daylight' },
    { value: 'Far Cry 5', label: 'Far Cry 5' },
    { value: 'Sniper Elite 3', label: 'Sniper Elite 3' },
    { value: 'Need for Speed', label: 'Need for Speed' },
    { value: 'World War Z', label: 'World War Z' },
    { value: 'Absolver', label: 'Absolver' },
    { value: 'A Way Out', label: 'A Way Out' },
    { value: 'Syndicate', label: 'Syndicate' },
    { value: "Assassin's Creed: Unity", label: "Assassin's Creed: Unity" },
    { value: 'Monster Hunter: World', label: 'Monster Hunter: World' },
    { value: 'Dead Space 3', label: 'Dead Space 3' },
    { value: 'Portal 2', label: 'Portal 2' },
    { value: 'Sea of Thieves', label: 'Sea of Thieves' },
    { value: 'Worms W.M.D', label: 'Worms W.M.D' },
    { value: 'Payday 2', label: 'Payday 2' },
    { value: 'Tetris 99', label: 'Tetris 99' },
    { value: 'Mario Tennis Aces', label: 'Mario Tennis Aces' },
    { value: 'Overcooked!', label: 'Overcooked!' },
    { value: 'Splatoon 2', label: 'Splatoon 2' },
    { value: 'Killing Floor 2', label: 'Killing Floor 2' },
    { value: 'Injustice 2', label: 'Injustice 2' },
    { value: "Tom Clancy's Ghost Recon Wildlands", label: "Tom Clancy's Ghost Recon Wildlands" },
    { value: 'Ark: Survival Evolved', label: 'Ark: Survival Evolved' },
    { value: '7 Days to Die', label: '7 Days to Die' },
    { value: 'H1Z1', label: 'H1Z1' },
    { value: 'EA Sports UFC 3', label: 'EA Sports UFC 3' },
    { value: 'Halo Wars 2', label: 'Halo Wars 2' },
    { value: 'Anthem', label: 'Anthem' },
];


class Question extends React.Component {

    state = {

        selectedOption: null,

    };

    handleChange = selectedOption => {
		this.setState(
			{ selectedOption },
			() => console.log('Option selected:', this.state.selectedOption)
		);
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
        const { selectedOption } = this.state;
        return (
            <div className="Question">
                <h2 id="questionaireh" className="questionaire-link">Who're You Looking For?</h2>
                <Jumbotron>
                    <p className="pSize">What game are you looking to group up in?</p>
                    <div className="dropdown">
                    <Select
				value={selectedOption}
				onChange={this.handleChange}
                options={options}
                classNamePrefix="dropStyle"
			        />
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
