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
  };
  export const LOADING_STATUS {
    INITIAL = 'INITIAL',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    FAILED = 'FAILED'
  }


export default GoogleSignIn;