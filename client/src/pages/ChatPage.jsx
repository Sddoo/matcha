import React, { useState } from 'react';
import { styled } from "@mui/system";
import Message from "../components/Message";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TextField, Button, CardActionArea, Box } from "@mui/material";

const StyledChatPage = styled("div")`
	display: grid;
	grid-template-columns: 300px 900px;
	grid-gap: 10px;
	min-height: 80vh;
`

const Dialogs = styled("div")`
	background-color: lightseagreen;
	display: grid;
	grid-template-rows: 40px;
	grid-auto-rows: 80px;
	gap: 5px;
`

const MessagePreviewWrap = styled(CardActionArea)`
`

const DialogSearch = styled(TextField)`

`

const OpenedDialog = styled("div")`
	height: 100%;
	background-color: lightblue;
`

const Chat = styled("div")`
	overflow-y: scroll;
	height: 90%;
	display: flex;
	flex-direction: column-reverse;
	background-color: darkslategrey;
`

const ChatMessage = styled(Box)`
	margin-top: 10px;
	width: 100%;
`

const ChatInput = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
	background-color: darkgrey;
`

const StyledTextField = styled(TextField)`
	width: 60%;
`

const ChatPage = () => {
	const [searchText, setSearchText] = useState('');
	const [chosenDialog, setChosenDialog] = useState(null);
	const MessagesInfo = Array(7).fill({
		id: 1,
		image: testImage,
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		name: "Vladislav Portnov"
	});
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeHandler = (e) => setSearchText(e.target.value);
	
	const focusHandler = (id) => setChosenDialog(id);
	
	return (
		<StyledChatPage>
			
			<Dialogs>
				<DialogSearch size="small" value={searchText} onChange={changeHandler}/>
				{MessagesInfo.map((elem, i) =>
					<MessagePreviewWrap
						key={i}
						onClick={() => focusHandler(elem.id)}
						className={`${chosenDialog === elem.id ? "Mui-focusVisible" : ""}`}>
							<Message messageInfo={elem} messageType="preview"/>
					</MessagePreviewWrap>
				)}
			</Dialogs>
			
			<OpenedDialog>
				<Chat>
					<ChatMessage>
						<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
					</ChatMessage>
					<ChatMessage>
						<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
					</ChatMessage>
					<ChatMessage>
						<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
					</ChatMessage>
					<ChatMessage>
						<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
					</ChatMessage>
					<ChatMessage>
						<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
					</ChatMessage>
				</Chat>
				<ChatInput>
					<StyledTextField size="small"/>
					<Button>Submit</Button>
				</ChatInput>
			</OpenedDialog>
			
		</StyledChatPage>
	);
};

export default ChatPage;