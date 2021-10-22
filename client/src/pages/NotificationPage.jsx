import React from 'react';
import styled from "styled-components"
import Notification from "../components/Notification";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


const StyledNotificationPage = styled.div`
	height: 100vh;
	background-color: darkmagenta;
`

const NotificationPage = () => {
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	return (
		<StyledNotificationPage>
			<Notification />
		</StyledNotificationPage>
	);
};

export default NotificationPage;