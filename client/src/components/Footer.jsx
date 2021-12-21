import React from 'react';
import {
	Container,
	Box
} from "@mui/material";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const StyledBox = styled(Box)`
	margin-top: 10px;
`

const Footer = () => {
	return (
		<Switch>
			<Route path="/chat">
				<></>
			</Route>
			<Route path="/">
				<StyledBox sx={{backgroundColor: "primary.main", color: "secondary.main"}}>
					<Container maxWidth="xs">
					</Container>
				</StyledBox>
			</Route>
		</Switch>
	);
};

export default Footer;