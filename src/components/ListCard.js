import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardDetails } from '../styles';

export const ListCard = () => {
	return (
		<ListCardContainer>
			<CardTitle>Card Title</CardTitle>
			<CardDetails> This is the details for the card. </CardDetails>
		</ListCardContainer>
	);
};

const ListCardContainer = styled(Card)`
box-shadow: none;
 border-bottom: 1px solid ${props => props.theme.colour.disabledColour};
 border-right: 1px solid ${props => props.theme.colour.disabledColour};
`