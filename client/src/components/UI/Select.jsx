import React from 'react';
import styled from "styled-components";

const StyledSelect = styled.select`

`

const Select = ({options, ...props}) => {
	return (
		<StyledSelect {...props}>
			{options.map((elem) => <option value={elem} key={elem}>{elem}</option>)}
		</StyledSelect>
	);
};

export default Select;