import React from 'react';
import styled from "styled-components"
import Input from "./UI/Input";

const StyledGap = styled.div`
`

const GapTitle = styled.div`

`

const GapValues = styled.div`

`

const GapInput = styled(Input)`
	width: 50px;
`

const Gap = ({name, values, changeHandler}) => {
	const start = name + "Start";
	const end = name + "End";
	
	return (
		<StyledGap>
			<GapTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</GapTitle>
			<GapValues>
				From <GapInput name={start} type="number" value={values[start]} onChange={changeHandler}/>
				to <GapInput name={end} type="number" value={values[end]} onChange={changeHandler}/>
			</GapValues>
		</StyledGap>
	);
};

export default Gap;