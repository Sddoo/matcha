import React, { useState } from 'react';
import {Input} from '../components/UI/UI';
import styled from 'styled-components';
import DialogPreview from "../components/DialogPreview";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const StyledChatPage = styled.div`
	display: grid;
	grid-template-columns: 30% 1fr;
	grid-gap: 10px;
	min-height: 80vh;
`

const Dialogs = styled.div`
	height: 100%;
	background-color: lightseagreen;
`

const OpenedDialog = styled.div`
	height: 100%;
	background-color: lightblue;
`

const Chat = styled.div`
	height: 90%;
	background-color: darkslategrey;
`

const ChatInput = styled.div`
	height: 10%;
	background-color: darkgrey;
`

const ChatPage = () => {
	const [searchText, setSearchText] = useState('');
	const testDialogPreviewInfo = {
		image: testImage,
		message: "hello",
		name: "Vladislav Portnov"
	}
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeHandler = (e) => setSearchText(e.target.value);
	
	
	
	return (
		<StyledChatPage>
			<Dialogs>
				<Input value={searchText} onChange={changeHandler}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
				<DialogPreview dialogPreviewInfo={testDialogPreviewInfo}/>
			</Dialogs>
			<OpenedDialog>
				<Chat>
				
				</Chat>
				<ChatInput>
					<Input/>
				</ChatInput>
			</OpenedDialog>
		</StyledChatPage>
	);
};

export default ChatPage;