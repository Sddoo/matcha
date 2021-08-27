import React from 'react';
import styled from 'styled-components';

const StyledChatPage = styled.div`
	background-color: darkgreen;
	display: grid;
	grid-template-columns: 30% 1fr;
	grid-gap: 10px;
	height: 100vh;
`;

const Dialogs = styled.div`
	height: 100%;
	background-color: lightseagreen;
`;

const OpenedDialog = styled.div`
	height: 100%;
	background-color: lightblue;
`;

const ChatPage = () => {
	return (
		<StyledChatPage>
			<Dialogs>
			
			</Dialogs>
			<OpenedDialog>
			
			</OpenedDialog>
		</StyledChatPage>
	);
};

export default ChatPage;