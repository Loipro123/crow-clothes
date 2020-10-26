import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCuPbWJ1YYoljYvLI-VqvMD8EiqJwWquDE",
    authDomain: "shopping-app-c9c66.firebaseapp.com",
    databaseURL: "https://shopping-app-c9c66.firebaseio.com",
    projectId: "shopping-app-c9c66",
    storageBucket: "shopping-app-c9c66.appspot.com",
    messagingSenderId: "644493072294",
    appId: "1:644493072294:web:a37fd94e505db7af8c6167",
    measurementId: "G-S4RJ7Q6YHW"
};

firebase.initializeApp(firebaseConfig);
export const createNewUser = async (authUser,additonData) => {
    if(!authUser){
        return
    }
    const userRef = firestore.doc(`users/${authUser.uid}`);
    const userSnap = await userRef.get();

    if(!userSnap.exists){
        const {displayName, email} = authUser;
        const createAt = new Date();
        try{
            userRef.set({
               displayName,email,createAt,...additonData
            })
        }catch(error){
            console.log('Create user error! ' + error);
        }
    }
    return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;