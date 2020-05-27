import React from 'react';
import styled from 'styled-components';
import { Route, Redirect, Link } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { AppBar, SearchBar } from '../styles';
import { Drawer } from '../components';

export const DefaultLayout = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.firebase.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoaded(auth) && !isEmpty(auth) ? (
					<DefaultLayoutContainer>
						<AppBar>
							<SearchBar placeholder="Search..." />
						</AppBar>

						<SiteContentContainer>
							<Drawer />
							<MainContentContainer>
								<Component {...props} />
							</MainContentContainer>
						</SiteContentContainer>
						
					</DefaultLayoutContainer>
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
};

const DefaultLayoutContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
`;

const SiteContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const MainContentContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
