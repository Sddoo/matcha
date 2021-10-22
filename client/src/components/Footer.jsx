import React from 'react';
import {
	Container,
	Box
} from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
	height: 20vh;
`

const Footer = () => {
	return (
		<StyledBox sx={{backgroundColor: "primary.main", color: "secondary.main"}}>
			<Container maxWidth="md">
			
			</Container>
		</StyledBox>
	);
};

export default Footer;