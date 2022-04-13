import { types } from "../types/types";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { 
    googleAuthProvider
} from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";

const auth = getAuth();

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {

        dispatch(
            startLoading()
        );

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch( login( user.uid, user.displayName) );
                // ...
                dispatch(
                    finishLoading()
                );
            })
            .catch((error) => {
                // const errorMessage = error.code.includes('user-not-found') ? "Sorry, we couldn't find that account" : "";
                console.log(error.code);

                switch( error.code ) {
                    case 'auth/user-not-found':
                        Swal.fire("User not found", "Sorry, we couldn't find that account", "error" );
                        break;
                    case 'auth/wrong-password':
                        Swal.fire("Password doesn't match", "Sorry, The password you have written is not correct. Did you forget it?", "error" );
                        break;
                    default:
                        Swal.fire("Oops.. an error has occured", "Sorry, we couldn't register you properly. Try again later.", "error" );
                        break;
                }

                dispatch(
                    finishLoading()
                );
                
            });

    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {

        dispatch(
            startLoading()
        );

        createUserWithEmailAndPassword( auth, email, password )
            .then( userCredential => {
                const user = userCredential.user
                return user;
            }).then( user => {
                updateProfile( auth.currentUser, {
                    displayName: name
                })
                dispatch(
                    login( user.uid, name )
                )
                dispatch(
                    finishLoading()
                );
            }).catch( error => {
                console.log( error )

                switch( error.code ) {
                    case 'auth/email-already-in-use':
                        Swal.fire("Email already in use", "That email has been taken. Please use another email address", "error" );
                        break;
                    default:
                        Swal.fire("Oops.. an error has occured", "Sorry, we couldn't register you properly. Try again later.", "error" );
                        break;

                }

                dispatch(
                    finishLoading()
                );

            })

    }   
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                const { uid, displayName: name } = user;

                dispatch(
                    login( uid, name )
                );
                
            }).catch((error) => {
                console.log( error );
            });

    }
}

export const login = ( uid, name ) => ({
    type: types.login,
    payload: {
        uid,
        name
    }
})

export const startLogout = () => {
    return ( dispatch ) => {
        signOut( auth )
            .then( () => {
                dispatch(
                    logout()
                )
                dispatch(
                    noteLogout()
                )
            })

    }
}

export const logout = () => ({
    type: types.logout
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})