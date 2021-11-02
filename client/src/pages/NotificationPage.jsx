import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Message from "../components/Message";
import testImage from "../testImage";


const StyledNotificationPage = styled(Box)`
	min-height: 100vh;
	background-color: darkmagenta;
	display: grid;
	grid-auto-rows: fit-content(200px);
	gap: 5px;
`


const NotificationPage = () => {
	const NotificationInfo = Array(15).fill({
		id: 1,
		image: testImage,
		name: "Vladislav Portnov",
		message: "Vladislav Portnov liked ur avatar"
	});
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	return (
		<StyledNotificationPage>
			{NotificationInfo.map((elem, i) => <Message key={i} messageInfo={elem} messageType={"chat"}/>)}
		</StyledNotificationPage>
	);
};

export default NotificationPage;