import React from 'react';
import { Image } from "./UI/UI";
import testImage from "../test.png";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledProfileImages = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
	gap: 20px;
	background-color: lightgreen;
`

const ProfileImages = () => {
	return (
		<StyledProfileImages>
			<div><Image src={testImage}/></div>
			<div><Image src={testImage}/></div>
			<div><Image src={testImage}/></div>
			<div><Image src={testImage}/></div>
			<div><Image src={testImage}/></div>
		</StyledProfileImages>
	);
};

export default ProfileImages;