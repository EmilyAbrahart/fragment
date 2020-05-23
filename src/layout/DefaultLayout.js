import React from 'react';
import styled from 'styled-components';
import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
	SideDrawer,
	SideDrawerList,
	SideDrawerItem,
	AppBar,
	SearchBar,
} from '../components';

const DefaultLayout = () => {
	return (
		<DefaultLayoutContainer>
			<AppBar>
				<SearchBar placeholder="Search..." />
			</AppBar>
			<SiteContentContainer>
				<SideDrawer>
					<SideDrawerList>
						<SideDrawerItem modifiers="title">My Snippets</SideDrawerItem>
					</SideDrawerList>
					<PrimaryButton>New Snippet</PrimaryButton>
					<SideDrawerList>
						<SideDrawerItem>All Snippets</SideDrawerItem>
						<SideDrawerItem>Starred Snippets</SideDrawerItem>
					</SideDrawerList>
					<SideDrawerList>
						<SideDrawerItem modifiers="listHeader">First Item</SideDrawerItem>
						<SideDrawerItem modifiers="coloredBullet">
							First Item
						</SideDrawerItem>
						<SideDrawerItem modifiers="coloredBullet">
							First Item
						</SideDrawerItem>
						<SideDrawerItem modifiers="coloredBullet">
							First Item
						</SideDrawerItem>
						<SideDrawerItem modifiers="coloredBullet">
							First Item
						</SideDrawerItem>
					</SideDrawerList>
				</SideDrawer>
				<MainContentContainer></MainContentContainer>
			</SiteContentContainer>
		</DefaultLayoutContainer>
	);
};

export default DefaultLayout;

const DefaultLayoutContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
`
