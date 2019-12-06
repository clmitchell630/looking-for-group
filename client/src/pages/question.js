import React from "react";
import "../App.css"


function Question() {
    return (
        <div className="Question">
            <br></br>
            <h2 id="questionaireh">Pre-Matching Questionaire</h2>
            <br></br>
            <div className="jumbotron" id="jumbo">
                <p>What game are you looking to group up in?</p>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Here
                        </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">League Of Legends</a>
                        <a class="dropdown-item" href="#">Escape From Tarkov</a>
                        <a class="dropdown-item" href="#">Halo Reach</a>
                        <a class="dropdown-item" href="#">Borderlands 3</a>
                        <a class="dropdown-item" href="#">Call of Duty: Black Ops 3</a>
                        <a class="dropdown-item" href="#">Call of Duty: Modern Warfare</a>
                        <a class="dropdown-item" href="#">BattleField 4</a>
                        <a class="dropdown-item" href="#">BattleField 1</a>
                        <a class="dropdown-item" href="#">Dota</a>
                        <a class="dropdown-item" href="#">Overwatch</a>
                        <a class="dropdown-item" href="#">World of Warcraft</a>
                        <a class="dropdown-item" href="#">Runescape</a>
                        <a class="dropdown-item" href="#">Hearthstone</a>
                        <a class="dropdown-item" href="#">Counter-Strike</a>
                    </div>
                </div>
                <br></br>
                <p>Level of play</p>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Here
                        </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Casual</a>
                        <a class="dropdown-item" href="#">Competitive</a>                        
                        <a class="dropdown-item" href="#">Speed-Run</a>
                    </div>
                </div>
                <br></br>
                <p>Troll or not?</p>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Here
                        </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Yes</a>
                        <a class="dropdown-item" href="#">No</a>                        
                    </div>
                </div>
                <br></br>
                <p>Skill level</p>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Here
                        </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">1(Hot Trash)</a>
                        <a class="dropdown-item" href="#">2</a>
                        <a class="dropdown-item" href="#">3(Average Joe)</a>                        
                        <a class="dropdown-item" href="#">4</a>                        
                        <a class="dropdown-item" href="#">5(Legendary)</a>                                                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;