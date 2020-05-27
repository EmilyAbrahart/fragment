import styled from 'styled-components';
import { typeScale } from './utils';

export const Card = styled.div`
	box-shadow: ${(props) => props.theme.shadow.dropShadow};
	min-width: 400px;
	min-height: 100px;
  padding: 4px 16px;
`;
export const CardTitle = styled.h4`
	font-size: ${typeScale.header4};
`;
export const CardDetails = styled.p`
	font-size: ${typeScale.paragraph};
`;
