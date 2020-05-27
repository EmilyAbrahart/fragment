import styled from 'styled-components';
import { typeScale } from './utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const INPUT_MODIFIERS = {
  light: (props) => `
  border-bottom: 1px solid ${props.theme.colour.inputColourLight}
  `
};

export const Input = styled.input`
	width: 400px;
	padding: 8px 16px;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colour.inputColour};
	background: none;
	max-width: 90%;
  
  ${applyStyleModifiers(INPUT_MODIFIERS)}
`;

export const TextArea = styled.textarea`
	width: 400px;
	padding: 8px 16px;
	border-radius: 8px;
	background-color: ${(props) => props.theme.colour.inputColour};
`;
