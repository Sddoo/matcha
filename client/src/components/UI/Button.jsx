import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
	padding: 0 20px;
  	background-color: lightcoral;
  	color: white;
`;

const Button = ({children, ...props}) => {
	return (
		<StyledButton {...props}>{children}</StyledButton>
	);
};

export default Button;