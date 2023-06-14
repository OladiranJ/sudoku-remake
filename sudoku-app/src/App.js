import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withFirebase } from './utils'
import Firebase from './utils/firebase'

// const { signInWithGoogle, signOutUser } =  Firebase

class App extends Component {

  state = {

  }

  render() {
    return(
      <div className="App">
        <button onClick={this.props.firebase.signInWithGoogle}>Sign In With Google</button>
      </div>
    )
  }

}

export default withFirebase(App);
