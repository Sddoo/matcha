import React from 'react';
import styled from 'styled-components';

const StyledField = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Field = ({children, className}) => { // className need for extending styles
	return (
		<StyledField className={className}>
			{children}
		</StyledField>
	);
};

export default Field;