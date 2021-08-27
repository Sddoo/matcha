import React from 'react';
import styled from 'styled-components';

const StyledField = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin: 10px 50px;
`

const FieldName = styled.div`

`

const FieldValue = styled.div`

`

const Field = ({name, value, Component = FieldValue}) => {
	console.log('testComponent', Component);
	
	return (
		<StyledField>
			<FieldName>
				{name}
			</FieldName>
			{Component !== FieldValue
				? <Component value={value}/>
				: <Component> {value} </Component>}
		</StyledField>
	);
};

export default Field;