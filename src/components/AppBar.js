import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const APP_BAR_MODIFIERS = {
	fixed: () => `
    position: fixed;
  `,
  narrow: () => `
    height: 40px;
  `
};

export const AppBar = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${props => props.theme.colour.primaryColour};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: ${typeScale.paragraph};

	${applyStyleModifiers(APP_BAR_MODIFIERS)}
`;
