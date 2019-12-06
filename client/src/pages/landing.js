import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Col, Row, Container } from '../components/Grid';
=======
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Description from '../components/Register';
>>>>>>> efff50306c2fdf12be23ec0e1dae9b3f7ee36db9

class Landing extends Component {

    render() {
        return (
            <div>
<<<<<<< HEAD
                <Container>
                
                </Container>
                <div className="footer">
                    <p> Copyright © 2019 Looking for Group </p>
                </div>
            </div>
        );
=======
                <Navbar>

                </Navbar>
                <div>
                    <Description />
                    <br />
                    <br />
                    <Register />
                </div>
            </div>

        )
>>>>>>> efff50306c2fdf12be23ec0e1dae9b3f7ee36db9
    }
}

export default Landing;