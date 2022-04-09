import { types } from "../types/types";
import { 
    googleAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup
} from "../firebase/firebase-config";

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(123, 'Pedro') );
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        const auth = getAuth();
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
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
