import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import Message from "../components/Message";
import testImage from "../testImage";

const StyledNotificationPage = styled(Box)(({theme}) => ({
	minHeight: "100vh",
	display: "grid",
	gridAutoRows: "fit-content(200px)",
	gap: "5px",
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px"
}));


const NotificationPage = () => {
	const NotificationInfo = Array(15).fill({
		id: 1,
		image: testImage,
		name: "Vladislav Portnov",
		message: "Vladislav Portnov liked you"
	});
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	return (
		<StyledNotificationPage>
			{NotificationInfo.map((elem, i) => (
				<>
					<Message key={i} messageInfo={elem} messageType={"chat"}/>
					<Divider/>
				</>
			))}
		</StyledNotificationPage>
	);
};

export default NotificationPage;