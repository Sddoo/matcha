import React from 'react';
import styled from "styled-components"

const StyledImage = styled.img`
	width: 100%;
	user-select: none;
`

const Image = (props) => {
	return (
		<StyledImage {...props}/>
	);
};

export default Image;