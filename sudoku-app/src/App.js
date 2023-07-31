import React, { Component } from 'react'
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { withFirebase } from './utils'
import Firebase from './utils/firebase'
import LandingPage from './pages/LandingPage'
import * as ROUTES from './constants/routes'

// const { signInWithGoogle, signOutUser } =  Firebase

class App extends Component {

  state = {
    authUser: null
  }

  render() {
    return(
      <div className="App">
        <NavBar authUser={this.state.authUser}/>
        <Routes>
          <Route exact path={ROUTES.LANDING} render={() => <LandingPage/>} />
        </Routes>
        <button onClick={this.props.firebase.signInWithGoogle}>Sign In With Google</button>
      </div>
    )
  }

}

export default withFirebase(App);
