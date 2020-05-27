import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createFirestoreInstance } from 'redux-firestore';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { GlobalStyle, defaultTheme } from './styles/utils';
import AppRouter from './routes';
import store from './state/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

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

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<ThemeProvider theme={defaultTheme}>
					<AppRouter />
					<GlobalStyle />
				</ThemeProvider>
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
