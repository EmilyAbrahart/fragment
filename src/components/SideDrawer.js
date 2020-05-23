import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../utils';

// Modifiers

const LIST_ITEM_MODIFIERS = {
	listHeader: ( props ) => `
	padding: 12px 0;
	color: ${props.theme.text.textColourOnDark};
	`,
	title: ( props ) => `
	font-size: ${typeScale.header4};
	color: ${props.theme.text.textColourInverted};
	align-self: center;
	text-align: center;
	`,
	coloredBullet: ( props ) => `
		&:before {
			content: '';
			display: block;
			position: absolute;
			left: -24px;
			top: 8px;
			background-color: ${props.theme.colour.secondaryColour};
			border-radius: 50%;
			height: 16px;
			width: 16px;
			box-shadow: ${props.theme.shadow.innerShadow};
			
		}
	`,
};

const SIDE_BAR_MODIFIERS = {
	narrow: () => `
		width: 250px;
	`,
	fixed: () => `
		position: fixed;
	`,
};

// Main Side Drawer

export const SideDrawer = styled.div`
	height: 100%;
	width: 350px;
	background-color: ${(props) => props.theme.colour.primaryColour};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 32px 16px;

	${applyStyleModifiers(SIDE_BAR_MODIFIERS)}
`;

// Side Drawer Section List

export const SideDrawerList = styled.ul`
	width: 100%;
	background: none;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	list-style-type: none;
`;

// Side Drawer Items

export const SideDrawerItem = styled.li`
	font-size: ${typeScale.paragraph};
	color: ${(props) => props.theme.text.textColourOnDark};
	padding: 8px 0;
	text-align: left;
	width: 80%;
	position: relative;

	${applyStyleModifiers(LIST_ITEM_MODIFIERS)}
`;
