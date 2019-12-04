import React from "react";
import "../App.css"


function Question() {
    return (
        <div className="Question">
            <h2 id="questionaireh">Pre-Matching Questionaire</h2>
            <div className="jumbotron" id="jumbo">
                <p>What Games do you play?</p>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Here
                        </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <p class="dropdown-item" href="#">League Of Legends</p>
                        <p class="dropdown-item" href="#">Escape From Tarkov</p>
                        <p class="dropdown-item" href="#">Halo Reach</p>
                        <p class="dropdown-item" href="#">Borderlands 3</p>
                        <p class="dropdown-item" href="#">Call of Duty:Black Ops 3</p>
                        <p class="dropdown-item" href="#">Call of Duty:Modern Warfare(new)</p>
                        <p class="dropdown-item" href="#">BattleField 4</p>
                        <p class="dropdown-item" href="#">BattleField 5</p>

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
                        <a class="dropdown-item" href="#">1(Noob)</a>
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