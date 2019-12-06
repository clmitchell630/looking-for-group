import React from "react";
import "../App.css"

class question extends Component {

    constructor() {
        super();
    this.state = {
        gameDropdown: "",
        levelDropdown: "",
        trollDropdown: "",
        skillDropdown: "",
    };
}

    handleInputChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value })
    };

    hnadleFormSubmit = evt => {
        evt.preventDefault();
        API.saveUser({
            game: this.state.value.gameDropdown,
            playLevel: this.state.value.levelDropdown,
            troll: this.state.value.trollDropdown,
            skillLevel: this.state.value.skillDropdown
        })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="Question">
                <br></br>
                <h2 id="questionaireh">Pre-Matching Questionaire</h2>
                <br></br>
                <div className="jumbotron" id="jumbo">
                    <p>What game are you looking to group up in?</p>
                    <div class="dropdown">
                        <select onChange={this.change} value={this.state.value.gameDropdown}>
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
                    <div class="dropdown">
                        <select onChange={this.change} value={this.state.value.levelDropdown}>
                            <option value="Casual">Casual</option>
                            <option value="Competitive">Competitive</option>
                            <option value="Speed-Run">Speed-Run</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Troll or not?</p>
                    <div class="dropdown">
                        <select onChange={this.change} value={this.state.value.trollDropdown}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br></br>
                    <p>Skill level</p>
                    <div class="dropdown">
                        <select onChange={this.change} value={this.state.value.skillDropdown}>
                            <option value="1">1(Hot Trash)</option>
                            <option value="2">2</option>
                            <option value="3">3(Average Joe)</option>
                            <option value="4">4</option>
                            <option value="5">5(Legendary)</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;