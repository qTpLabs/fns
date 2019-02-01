import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
	apiKey: "AIzaSyAYdcvZRmosSHRnpm3gn_XuhZ1CivzHDSI",
	authDomain: "feel-and-share.firebaseapp.com",
	databaseURL: "https://feel-and-share.firebaseio.com",
	projectId: "feel-and-share",
	storageBucket: "feel-and-share.appspot.com",
	messagingSenderId: "93243505151"
};
firebase.initializeApp(config);

export default firebase;