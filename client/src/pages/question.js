import React, { Component } from "react";
import "../App.css";
import Question from '../components/Question';
import { Col, Row, Container} from '../components/Grid';


class Questions extends Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <Container>
                <Question history={this.props.history} />
            </Container>
        );
    }

}

export default Questions;