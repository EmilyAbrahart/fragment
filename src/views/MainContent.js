import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SnippetList } from '../styles';


const MainContent = () => {

	return (
		<MainContentContainer>
			<SnippetList />
			<div></div>
		</MainContentContainer>
	);
};

export default connect((state) => state )(MainContent);

const MainContentContainer = styled.div`
	height: 100%;
	width: 100%;
`;
