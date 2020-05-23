import * as colours from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
	colour: {
		primaryColour: colours.primaryColour[300],
		primaryWindowColour: colours.neutralColour[200],
		secondaryWindowColour: colours.neutralColour[300],
		secondaryColour: colours.secondaryColour[300],
		secondaryColourGradient: colours.secondaryColour[400],
		secondaryColourActive: colours.secondaryColour[400],
		tertiaryColour: colours.tertiaryColour[300],
		tertiaryColourGradient: colours.tertiaryColour[400],
		tertiaryColourActive: colours.tertiaryColour[400],
		disabledColour: colours.neutralColour[400],
		inputColour: colours.neutralColour[200],
		inputColourDark: colours.primaryColour[400],
		iconColour: colours.neutralColour[500],
		iconColourOnDark: colours.primaryColour[100],
	},
	text: {
		textColour: colours.neutralColour[600],
		textColourInverted: colours.neutralColour[100],
		textColourOnDark: colours.primaryColour[100],
		textTitleColourOnDark: colours.primaryColour[200],
		primaryFont,
	},
	shadow: {
		dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		innerShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	status: {
		successColour: colours.successColour[100],
		successColourGradient: colours.successColour[200],
		errorColour: colours.errorColour[100],
		errorColourGradient: colours.errorColour[200],
		warningColour: colours.warningColour[100],
		warningColourGradient: colours.warningColour[200],
	},
};
export const darkTheme = {
	colour: {
		primaryColour: colours.primaryColour[300],
		primaryWindowColour: colours.neutralColour[200],
		secondaryWindowColour: colours.neutralColour[300],
		secondaryColour: colours.secondaryColour[300],
		secondaryColourGradient: colours.secondaryColour[400],
		secondaryColourActive: colours.secondaryColour[400],
		tertiaryColour: colours.tertiaryColour[300],
		tertiaryColourGradient: colours.tertiaryColour[400],
		tertiaryColourActive: colours.tertiaryColour[400],
		disabledColour: colours.neutralColour[400],
		inputColour: colours.neutralColour[200],
		inputColourDark: colours.primaryColour[400],
	},
	text: {
		textColour: colours.neutralColour[600],
		textColourInverted: colours.neutralColour[100],
		textColourOnDark: colours.primaryColour[100],
		textTitleColourOnDark: colours.primaryColour[200],
		primaryFont,
	},
	shadow: {
		dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		innerShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
	},
	status: {
		successColour: colours.successColour[100],
		successColourGradient: colours.successColour[200],
		errorColour: colours.errorColour[100],
		errorColourGradient: colours.errorColour[200],
		warningColour: colours.warningColour[100],
		warningColourGradient: colours.warningColour[200],
	},
};
