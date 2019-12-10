import React from "react";
import "../../App.css";
import ReactDOM from 'react-dom';



const GOOGLE_BUTTON_ID = 'google-sign-in-button';


class GoogleSignIn extends React.Component {
    
  componentDidMount() {
    window.gapi.signin2.render(
      GOOGLE_BUTTON_ID,
      {
        width: 200,
        height: 50,
        onsuccess: this.onSuccess,
      },
    );
  }

  onSuccess(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("Name: " + profile.getName());
  }

  render() {
    return (
        <div className="Signup">
        <div className="jumbotron" id="hdrbr">
            <p id="hdr">Looking For Group</p>
        </div><div id="group">
            <div className="jumbotron" id="bckrnd">
                <div class="form-horizontal">
                    <div class="form-group form-group-sm">
                        <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Username:</label>
                        <div class="row-xs-8 row-sm-4 row-md-4">
                            <input class="form-control" id="pid" />
                        </div>
                    </div>
                </div>
                <div class="form-horizontal">
                    <div class="form-group form-group-sm">
                        <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Email:</label>
                        <div class="row-xs-8 row-sm-4 row-md-4">
                            <input class="form-control" type="email" id="pid" />
                        </div>
                    </div>
                </div>
                <div class="form-horizontal">
                    <div class="form-group form-group-sm">
                        <label for="pid" id="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Password:</label>
                        <div class="row-xs-8 row-sm-4 row-md-4">
                            <input class="form-control" type="password" id="pid" required />
                        </div>
                    </div>
                </div>
                <div class="form-horizontal">
                    <div class="form-group form-group-sm">
                        <label for="pid" class="control-label field_name2 row-xs-4 row-sm-4 row-md-3">Confirm password:</label>
                        <div class="row-xs-8 row-sm-4 row-md-4">
                            <input class="form-control" type="password" id="pid" required />
                        </div>
                    </div>
                </div>
                <br></br>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                <button disabled="{!isEnabled}" type="submit" id="btnsu" class="btn btn-outline-danger">Sign me up!</button>
            </div>

        </div>
    </div>
        );
  }
}

export default GoogleSignIn;