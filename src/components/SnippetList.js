import React from 'react';
import styled from 'styled-components';
import { ListCard } from './ListCard';

export const SnippetList = () => {
	return (
		<SnippetListContainer>
			<ListCard />
			<ListCard />
			<ListCard />
			<ListCard />
			<ListCard />
			<ListCard />
		</SnippetListContainer>
	);
};

const SnippetListContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	overflow-y: scroll;
`;
