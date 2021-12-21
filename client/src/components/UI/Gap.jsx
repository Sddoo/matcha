import React from 'react';
import styled from "styled-components"
import {
	TextField
} from "@mui/material";

const StyledGap = styled.div`
`

const GapValues = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Gap = ({name, values, changeHandler}) => {
	const start = name + "Start";
	const end = name + "End";
	
	return (
		<StyledGap>
			<GapValues>
				From <TextField name={start} type="number" value={values[start]} onChange={changeHandler} size={"small"} sx={{maxWidth: "100px", m: "0 5px"}}/>
				to <TextField name={end} type="number" value={values[end]} onChange={changeHandler} size={"small"} sx={{maxWidth: "100px", m: "0 5px"}}/>
			</GapValues>
		</StyledGap>
	);
};

export default Gap;