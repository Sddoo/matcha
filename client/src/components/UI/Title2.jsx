import React from 'react';
import styled from "styled-components"

const StyledTitle2 = styled.h2`

`

const Title2 = ({children}) => {
	return (
		<StyledTitle2>
			{children}
		</StyledTitle2>
	);
};

export default Title2;