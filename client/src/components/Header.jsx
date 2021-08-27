import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	background-color: yellowgreen;
	height: 8vh;
	width: 100%;
	padding: 0 20%;
	margin-bottom: 10px;
	
	& > * {
		display: inline-block;
		margin-right: 20px;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/profile/123">logo</Link>
			<Link to="/profile/123">My profile</Link>
			<Link to="/settings">Profile settings</Link>
			<Link to="/chat">Chat</Link>
			<Link to="/search">Search</Link>
		</StyledHeader>
	);
};

export default Header;