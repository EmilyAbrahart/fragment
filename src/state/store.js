import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from './reducers';

const initialState = {};
const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f
	)
);

export default store;
