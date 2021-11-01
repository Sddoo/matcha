import React from 'react';
import {
	Container,
	Box
} from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
`

const Footer = () => {
	return (
		<StyledBox sx={{backgroundColor: "primary.main", color: "secondary.main"}}>
			<Container maxWidth="xs">
			
			</Container>
		</StyledBox>
	);
};

export default Footer;