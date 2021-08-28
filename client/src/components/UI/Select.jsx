import React from 'react';
import styled from "styled-components";

const StyledSelect = styled.select`

`

const Select = ({children, ...props}) => {
	return (
		<StyledSelect {...props}>
			{children}
		</StyledSelect>
	);
};

export default Select;