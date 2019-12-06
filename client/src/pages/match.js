import React, {Component} from "react";
import ThumbsBttns from "../components/match"
class Match extends Component {
    state = {
        lastMatch: []
    };

    componentDidMount() {
        API.getMatch()
        .then(res => this.setState({lastMatch: res.data}))
        .catch(err => console.log(err))
    }

<<<<<<< HEAD
function Match() {
    return (
        <div>

        </div>
    );
}

export default Match;
=======
    handleThumbsUpButton = () => {savedMatch => {
    }
        
    }
}

import React from "react";
>>>>>>> efff50306c2fdf12be23ec0e1dae9b3f7ee36db9
