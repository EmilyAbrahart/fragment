import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import SignInGoogle from '../auth/SignInGoogle';

const Home = () => {

	return (
		<div>
			<h3>Welcome to Fragment</h3>
			<SignInGoogle />
		</div>
	);
};
export default Home;
