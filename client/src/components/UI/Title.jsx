import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
`;

const Title = ({children}) => {
	return (
		<StyledTitle>
			{children}
		</StyledTitle>
	);
};

export default Title;