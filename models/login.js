import React from "react";
const GOOGLE_BUTTON_ID = 'google-sign-in-button';
const isReady = authStore.authLoadingStatus === LOADING_STATUS.LOADED;


export class AuthStore {
    @observable
    authLoadingStatus = LOADING_STATUS.INITIAL;
  
    @action.bound
    setAuthLoadingStatus(toStatus) {
      this.authLoadingStatus = toStatus;
    }
  }
  export const LOADING_STATUS {
    INITIAL = 'INITIAL',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    FAILED = 'FAILED',
  }

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
      <div id={GOOGLE_BUTTON_ID}/>
    );
  }
  
}

export default GoogleSignIn;