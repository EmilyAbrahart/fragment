import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { DefaultLayout } from '../layout';
import MainContent from '../views/MainContent';
import Home from '../views/Home';
import AddSnippet from '../views/AddSnippet';

const AppRouter = () => {
	const auth = useSelector((state) => state.firebase.auth);
	return (
		<BrowserRouter>
			<Switch>
				{/* <Route exact path="/">
					{isLoaded(auth) && !isEmpty(auth) ? (
						<Redirect to="snippets" />
					) : (
						<Home />
					)}
				</Route> */}
				<DefaultLayout path="/snippets" component={MainContent} />
				<DefaultLayout exact path="/" component={AddSnippet} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
