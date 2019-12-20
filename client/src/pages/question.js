import React, { Component } from "react";
import "../App.css";
import Question from '../components/Question';
import { Container} from '../components/Grid';


class Questions extends Component {

    render() {
        return (
            <Container>
                <Question history={this.props.history} />
            </Container>
        );
    }

}

export default Questions;
