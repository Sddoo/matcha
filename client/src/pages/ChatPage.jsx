import React, { useState } from 'react';
import { styled } from "@mui/system";
import Message from "../components/Message";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TextField, Button, CardActionArea, Box, Divider, IconButton } from "@mui/material";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import DialogPreview from "../mocks/DialogPreview";

const StyledChatPage = styled(Box)(({theme}) => ({
	display: "grid",
	gridTemplateColumns: "30% 70%",
	gridTemplateRows: "90vh",
	gridGap: "10px",
	marginBottom: "2vh",
	
	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "100%",
	}
}));

const Dialogs = styled(Box)(({theme, chosenDialog}) => ({
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
	
	[theme.breakpoints.down('lg')]: {
		display: chosenDialog ? "none" : "grid",
	}
}));

const MessagePreviewWrap = styled(CardActionArea)`
`

const DialogSearch = styled(TextField)`
	width: 100%;
`

const OpenedDialog = styled(Box)(({theme, chosenDialog}) => ({
	height: "auto",
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	position: "relative",
	
	[theme.breakpoints.down('lg')]: {
		display: chosenDialog ? "block" : "none",
	}
}));

const ChatHeader = styled(Box)(({theme}) => ({
	display: "none",
	bottomBorder: `1px solid ${theme.palette.border.main}`,
	position: "absolute",
	backgroundColor: "white",
	width: "100%",
	top: 0,
	
	[theme.breakpoints.down('lg')]: {
		display: "block",
	}
}))

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
	const MessagesInfo = DialogPreview.payload.messages;
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeHandler = (e) => setSearchText(e.target.value);
	
	const openDialog = (id) => setChosenDialog(id);
	
	const closeDialog = () => setChosenDialog(null);
	
	return (
		<StyledChatPage>
			
			<Dialogs chosenDialog={chosenDialog}>
				<DialogSearch size="small" value={searchText} onChange={changeHandler}/>
				{MessagesInfo.map((elem, i) =>
					<MessagePreviewWrap
						key={i}
						onClick={() => openDialog(elem.id)}
						className={`${chosenDialog === elem.id ? "Mui-focusVisible" : ""}`}>
							<Message messageInfo={elem} messageType="preview"/>
					</MessagePreviewWrap>
				)}
			</Dialogs>
			
			<OpenedDialog chosenDialog={chosenDialog}>
				
				<ChatHeader>
					<IconButton onClick={closeDialog}>
						<ChevronLeftOutlined/>
					</IconButton>
				</ChatHeader>
				
				<Chat>
					{MessagesInfo.map((elem) =>
						<React.Fragment key={elem.id}>
							<ChatMessage>
								<Message messageInfo={elem} messageType="chat"/>
							</ChatMessage>
							<Divider/>
						</React.Fragment>
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