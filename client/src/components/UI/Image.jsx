import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
	width: 100%;
`;

const Image = (props) => {
	return (
		<StyledImage {...props} />
	);
};

export default Image;