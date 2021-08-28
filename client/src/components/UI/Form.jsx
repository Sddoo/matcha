import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 30%;
  	margin: 50px auto;
  	padding: 50px 0;
	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	border: 2px solid lightgreen;
    border-radius: 10px;
`

const Form = ({submitHandler, children, ...props}) => {
	
    return (
        <StyledForm onSubmit={submitHandler} {...props}>
	        {children}
        </StyledForm>
    );
};

export default Form;