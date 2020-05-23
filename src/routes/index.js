import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from '../layout';
import { Home } from '../views';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;