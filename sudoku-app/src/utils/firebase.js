import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import * as ROUTES from '../constants/routes'
import app from 'firebase/compat/app'
import config from './config'


class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = getAuth() // app.auth()
        this.db = getFirestore()
        this.storage = getStorage()
        this.provider = new GoogleAuthProvider()
    }

    // Auth Methods

    signInWithGoogle = () => {
        signInWithPopup(this.auth, this.provider)
            .then((result) => {
                // Just going to console log for now
                console.log(result)
                this.props.history.push(ROUTES.LANDING)
            })
            .catch((error) => {
                // Just going to console log for now
                console.log(error)
            })
    }

    signOutUser = () => {
        signOut(this.auth)
            .then(() => {
                // Probably an alert or redirect here
                console.log('Successfully signed out')
            })
            .catch((error) => {
                // Just going to console log for now
                console.log(error)
            })   
    }

}

export default Firebase