import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const Input = styled.input`
 	width: 400px;
	padding: 8px 16px;
	border-radius: 8px;
	border: none;
  background-color: ${props => props.theme.colour.inputColour};
  margin: 100px;
`

export const TextArea = styled.textarea`
   	width: 400px;
	padding: 8px 16px;
	border-radius: 8px;
	border: none;
  background-color: ${props => props.theme.colour.inputColour};
  margin: 100px;
`