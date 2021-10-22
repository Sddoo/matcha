import React from 'react';
import styled from "styled-components"

const StyledTextarea = styled.textarea`

`

const Textarea = ({...props}) => {
	return (<StyledTextarea {...props}>
		
		</StyledTextarea>);
};

export default Textarea;