import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const SEARCH_BAR_MODIFIERS = {
	light: ({ props }) => `
    background-color: ${props.theme.primaryWindowColour};
  `,
};

export const SearchBar = styled.input`
	width: 400px;
	padding: 8px 16px;
	border-radius: 8px;
	border: none;
	background-color: ${(props) => props.theme.colour.inputColourDark};
	color: ${(props) => props.theme.text.textColourOnDark};
	box-shadow: ${(props) => props.theme.shadow.innerShadow};
	font-size: ${typeScale.paragraph};

	&:focus,
	&:active {
		outline: none;
		border: 2px solid ${(props) => props.theme.colour.secondaryColourActive};
	}

	${applyStyleModifiers(SEARCH_BAR_MODIFIERS)}
`;
