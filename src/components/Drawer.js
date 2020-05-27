import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideDrawer, SideDrawerItem, SideDrawerList } from '../styles';
import { PrimaryButton } from '../styles';
import { CategoryForm } from './CategoryForm';

export const Drawer = () => {
	const [categoryFormVisible, setCategoryFormVisible] = useState(false);
	return (
		<SideDrawer>
			<SideDrawerList>
				<SideDrawerItem modifiers="title">My Snippets</SideDrawerItem>
			</SideDrawerList>

			<PrimaryButton>
				<Link to="/new">NEW SNIPPET</Link>
			</PrimaryButton>

			<SideDrawerList>
				<SideDrawerItem>All Snippets</SideDrawerItem>
				<SideDrawerItem>Starred Snippets</SideDrawerItem>
			</SideDrawerList>

			<SideDrawerList>
				<SideDrawerItem modifiers="listHeader">Categories</SideDrawerItem>
				<CategoryForm />
			</SideDrawerList>
		</SideDrawer>
	);
};
