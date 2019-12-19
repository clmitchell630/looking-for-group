import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import API from '../../utils/API';
import "./welcome.css";


function componentDidMount(loading, user, props) {
   
    console.log(user.sub);
    API.getUser(user.sub)
        .then(res => {
            if(res.data && res.data.sub === user.sub) {
                props.history.push('/matchform');
            } else {
                handleUserSubmit(loading, user, props);
            }
        })
        .catch(err => console.log(err))
}

function handleUserSubmit(loading, user, props) {
    // console.log("PROPZ", props); 
    if (loading || !user) {
        console.log("loading...");
    }

    API.saveUser({
        username: user.name,
        email: user.email,
        sub: user.sub
    }).then(res => {
        if (res.status === 200) {
            console.log('foo2');
            props.history.push('/matchform');
            console.log(props.history);
        }
    }).catch(err => console.error(err));

};

function Welcome(props) {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const { loading, user } = useAuth0();

    return (
        <div className="welcomeContainer">
            <div>
                <h2>Looking For Group</h2>
                <h6>Play Together.</h6>
            </div>
            <div className="welcome-g2">
                {isAuthenticated ?
                    <div>
                        <h6> Start searching!</h6 >
                        <button className="welcome-btn" onClick={() => componentDidMount(loading, user, props)}>Get Started</button>
                    </div > :
                    <div >
                        <h6>New?</h6>
                        <button className="welcome-btn" onClick={() => loginWithRedirect({})}>Sign in to get started</button>
                    </div>}
            </div>
            <Link to='/profile' className="testProfile">[TEST] profile</Link>
        </div>
    );

}

export default Welcome;
