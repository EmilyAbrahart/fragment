import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
	small: () => `
  font-size: ${typeScale.helperText};
  padding: 8px;
  `,
	large: () => `
  font-size: ${typeScale.header5};
  padding: 16px 24px;
	`,
	success: ( props ) => `
	background: linear-gradient(
		${props.theme.status.successColour},
		${props.theme.status.successColourGradient}
	);
	color: ${props.theme.text.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${props.theme.status.successColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${props.theme.status.successColour},
		${props.theme.status.successColourGradient}
		);
	}
	`,
	warning: ( props ) => `
	background: linear-gradient(
		${props.theme.status.warningColour},
		${props.theme.status.warningColourGradient}
	);
	color: ${props.theme.text.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${props.theme.status.warningColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${props.theme.status.warningColour},
		${props.theme.status.warningColourGradient}
		);
	}
	`,
	error: ( props ) => `
	background: linear-gradient(
		${props.theme.status.errorColour},
		${props.theme.status.errorColourGradient}
	);
	color: ${props.theme.text.textColourInverted};
	border: none;
	&:focus {
		outline: 2px solid ${props.theme.status.errorColour};
		outline-offset: 2px;
	}
	&:active {
		background: linear-gradient(
		${props.theme.status.errorColour},
		${props.theme.status.errorColourGradient}
		);
	}
	`,
	successGhostButton: ( props ) => `
	background: none;
	color: ${props.theme.status.successColour};
	border: 2px solid ${props.theme.status.successColour};
	
	&:hover, &:active {
		background-color: ${props.theme.status.successColour};
		color: ${props.theme.text.textColourInverted};
	}

	&:focus {
		outline: 2px solid ${props.theme.status.successColour};
		outline-offset: 2px;
	}
	`,
	warningGhostButton: ( props ) => `
	background: none;
	color: ${props.theme.status.warningColour};
	border: 2px solid ${props.theme.status.warningColour};
	
	&:hover, &:active {
		background-color: ${props.theme.status.warningColour};
		color: ${props.theme.text.textColourInverted};
	}
	&:focus {
		outline: 2px solid ${props.theme.status.warningColour};
		outline-offset: 2px;
	}
	`,
	errorGhostButton: ( props ) => `
	background: none;
	color: ${props.theme.status.errorColour};
	border: 2px solid ${props.theme.status.errorColour};
	
	&:hover, &:active {
		background-color: ${props.theme.status.errorColour};
		color: ${props.theme.text.textColourInverted};
	}
	&:focus {
		outline: 2px solid ${props.theme.status.errorColour};
		outline-offset: 2px;
	}
	`,
};

const Button = styled.button`
	padding: 12px 24px;
	font-size: ${typeScale.paragraph};
	border-radius: 3px;
	min-width: 100px;
	cursor: pointer;
	font-family: ${(props) => props.theme.text.primaryFont};
	border: none;
	outline: none;

	&:hover {
		box-shadow: none;
	}

	&:disabled {
		background: ${(props) => props.theme.colour.disabledColour};
		cursor: not-allowed;
		box-shadow: none;
	}
`;

export const PrimaryButton = styled(Button)`
	background: linear-gradient(
		${(props) => props.theme.colour.secondaryColour},
		${(props) => props.theme.colour.secondaryColourGradient}
	);
	color: white;
	box-shadow: ${(props) => props.theme.shadow.dropShadow};

	&:focus {
		outline: 2px solid ${(props) => props.theme.colour.secondaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${(props) => props.theme.colour.secondaryColourActive};
		box-shadow: ${(props) => props.theme.shadow.innerShadow};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
	background: linear-gradient(
		${(props) => props.theme.colour.tertiaryColour},
		${(props) => props.theme.colour.tertiaryColourGradient}
	);
	color: white;
	box-shadow: ${(props) => props.theme.shadow.shadowropShadow};

	&:focus {
		outline: 2px solid ${(props) => props.theme.colour.tertiaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${(props) => props.theme.colour.tertiaryColourActive};
		box-shadow: ${(props) => props.theme.shadow.innerShadow};
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
	background: none;
	color: ${(props) => props.theme.colour.secondaryColour};
	border: 2px solid ${(props) => props.theme.colour.secondaryColour};
	box-shadow: ${(props) => props.theme.shadow.dropShadow};

	&:focus {
		outline: 2px solid ${(props) => props.theme.colour.secondaryColour};
		outline-offset: 2px;
	}

	&:active {
		background: ${(props) => props.theme.colour.secondaryColour};
		box-shadow: ${(props) => props.theme.shadow.innerShadow};
		color: ${(props) => props.theme.text.textColourInverted};
	}

	&:disabled {
		color: ${(props) => props.theme.colour.disabledColour};
		border: 2px solid ${(props) => props.theme.colour.disabledColour};
		background: none;
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
