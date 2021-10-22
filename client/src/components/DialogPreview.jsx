import React from 'react';
import styled from "styled-components"
import {Image} from './UI/UI'

const StyledDialogPreview = styled.div`
	background-color: darkkhaki;
	margin: 5px 0;
	display: grid;
	width: 100%;
	grid-template-columns: 30% 70%;
	grid-template-rows: 30px 50px;
	grid-template-areas:
		"image name"
		"image message";
`

const DialogPreviewImage = styled.div`
	grid-area: image;
`

const DialogPreviewName = styled.div`
	grid-area: name;
`

const DialogPreviewMessage = styled.div`
	grid-area: message;
`

const DialogPreview = ({dialogPreviewInfo}) => {
	return (
		<StyledDialogPreview>
			<DialogPreviewImage>
				<Image src={dialogPreviewInfo.image}/>
			</DialogPreviewImage>
			<DialogPreviewName>
				{dialogPreviewInfo.name}
			</DialogPreviewName>
			<DialogPreviewMessage>
				{dialogPreviewInfo.message}
			</DialogPreviewMessage>
		</StyledDialogPreview>
	);
};

export default DialogPreview;