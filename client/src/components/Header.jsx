import React from 'react';
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Link as MUILink
} from "@mui/material";
import { useSelector } from "react-redux";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
	gap: "30px",
	margin: "auto",
	padding: "0",
	whiteSpace: "nowrap",
	
	[theme.breakpoints.down('sm')]: {
	
	}
}));

const Header = () => {
	const {profileId, token} = useSelector(state => state);
	
	return (
		<AppBar position="sticky" sx={{m: "0 0 10px 0"}}>
			<StyledToolbar>
				<MUILink color="secondary" to={`/profile/${profileId}`} component={Link} variant="body1" underline="hover">DaBoo</MUILink>
				<MUILink color="secondary" to={`/profile/${profileId}`} component={Link} variant="body1" underline="hover">My profile</MUILink>
				<MUILink color="secondary" to="/settings" component={Link} variant="body1" underline="hover">Profile settings</MUILink>
				<MUILink color="secondary" to="/chat" component={Link} variant="body1" underline="hover">Chat</MUILink>
				<MUILink color="secondary" to="/browsing" component={Link} variant="body1" underline="hover">Browsing</MUILink>
				<MUILink color="secondary" to="/notifications" component={Link} variant="body1" underline="hover">Notifications</MUILink>
			</StyledToolbar>
		</AppBar>
	);
};

export default Header;