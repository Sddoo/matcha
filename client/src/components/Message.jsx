import React from 'react';
import { styled } from "@mui/system";
import { CardMedia, Typography, Box } from "@mui/material";
import testImage from "../test1.png";

const MessageBox = styled(Box)`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: auto 1fr;
	grid-template-rows: 30px 1fr;
	grid-template-areas:
		"image name"
		"image message";
`

const MessageImage = styled(CardMedia)`
	grid-area: image;
	object-fit: cover;
	height: ${props => props.messageType === "preview" ? "" : "80px"};
	width: ${props => props.messageType === "preview" ? "" : "80px"};
`

const MessageName = styled(Typography)`
	grid-area: name;
	font-size: 18px;
`

const MessageContent = styled(Typography)`
	grid-area: message;
	text-overflow: ${props => props.messagetype === "preview" ? "ellipsis" : ""};
	white-space: ${props => props.messagetype === "preview" ? "nowrap" : "normal"};
	overflow: ${props => props.messagetype === "preview" ? "hidden" : "visible"};
`

const Message = ({messageInfo, messageType = "preview"}) => {
	return (
		<MessageBox>
			<MessageImage
				component="img"
				image={testImage}
				messagetype={messageType}
			/>
			<MessageName>
				{messageInfo.name}
			</MessageName>
			<MessageContent messagetype={messageType}>
				{messageInfo.message}
			</MessageContent>
		</MessageBox>
	);
};

export default Message;