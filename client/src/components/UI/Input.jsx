import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`

`;

const Input = (props) => {
	return (
		<StyledInput {...props} />
	);
};

export default Input;