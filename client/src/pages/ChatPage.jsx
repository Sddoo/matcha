import React, { useState } from 'react';
import { styled } from "@mui/system";
import Message from "../components/Message";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TextField, Button, CardActionArea, Box, Divider } from "@mui/material";

const StyledChatPage = styled(Box)(({theme}) => ({
	display: "grid",
	gridTemplateColumns: "25% 75%",
	gridTemplateRows: "70vh",
	gridGap: "10px",
	
	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "100%",
	}
}));

const Dialogs = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	padding: "5px",
	display: "grid",
	gridTemplateRows: "40px",
	gridAutoRows: "80px",
	gap: "5px",
	overflowY: "scroll",
	overflowX: "hidden",
	
	// [theme.breakpoints.down('lg')]: {
	// 	display: "none",
	// }
}));

const MessagePreviewWrap = styled(CardActionArea)`
`

const DialogSearch = styled(TextField)`

`

const OpenedDialog = styled(Box)(({theme}) => ({
	height: "auto",
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	
	[theme.breakpoints.down('lg')]: {
		display: "none",
	}
}));

const Chat = styled("div")`
	overflow-y: scroll;
	height: 90%;
	display: flex;
	flex-direction: column-reverse;
`

const ChatMessage = styled(Box)`
	margin-top: 10px;
	width: 100%;
`

const ChatInput = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "10%",
	borderTop: `1px solid ${theme.palette.border.main}`,
}));

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
			
			<Dialogs chosenDialog={chosenDialog}>
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
			
			<OpenedDialog chosenDialog={chosenDialog}>
				<Chat>
					{Array(5).fill(
						<>
							<ChatMessage>
								<Message messageInfo={MessagesInfo[1]} messageType="chat"/>
							</ChatMessage>
							<Divider/>
						</>
					)}
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