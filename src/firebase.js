import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyABTTPpHrOWe7ltA5BVvzWKV-b0r84tOdk',
	authDomain: 'fragment-d59a7.firebaseapp.com',
	databaseURL: 'https://fragment-d59a7.firebaseio.com',
	projectId: 'fragment-d59a7',
	storageBucket: 'fragment-d59a7.appspot.com',
	messagingSenderId: '78828912717',
	appId: '1:78828912717:web:032db3d49066acfaa0dc04',
	measurementId: 'G-JJE64QM42C',
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();

export default firebase;
