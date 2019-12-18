import React, { Component } from "react";
import "../App.css";
import Question from '../components/Question';
import { Col, Row, Container} from '../components/Grid';


class Questions extends Component {



    render() {
        return (
            <Container>
                <Question />
            </Container>
        );
    }

}

export default Questions;