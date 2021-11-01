import React from 'react';
import { styled } from "@mui/system";
import { CardMedia, CardActionArea, Typography, Box } from "@mui/material";
import testImage from "../test.png";

const DialogActionArea = styled(CardActionArea)`
	display: grid;
	background-color: lightgreen;
	grid-template-columns: 80px 1fr;
	grid-template-rows: 20px 55px;
	grid-template-areas:
		"image name"
		"image message";
	gap: 5px;
`

const DialogPreviewImage = styled(CardMedia)`
	grid-area: image;
	object-fit: cover;
	height: 100%;
`

const DialogPreviewName = styled(Typography)`
	grid-area: name;
	font-size: 18px;
	margin-top: 5px;
`

const DialogPreviewMessage = styled(Typography)`
	grid-area: message;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	height: 100%;
	
`

const MessagePreview = ({messageInfo, focused, onClick}) => {
	return (
		<DialogActionArea className={`${focused ? "Mui-focusVisible" : ""}`} onClick={onClick}>
			<DialogPreviewImage
				component="img"
				image={testImage}
			/>
			<DialogPreviewName>
				{messageInfo.name}
			</DialogPreviewName>
			<DialogPreviewMessage>
				{messageInfo.message}
			</DialogPreviewMessage>
		</DialogActionArea>
	);
};

export default MessagePreview;