import React from 'react';
import Carousel from "../components/Carousel";
import { CardActionArea, CardMedia, CardContent, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCardActionArea = styled(CardActionArea)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const UsersCarousel = ({users}) => {
	const usersComps = users.map((user) =>
		<>
			<StyledCardActionArea sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
				<CardMedia
					component="img"
					height="50%"
					image={user.image}
					alt="kit"
				/>
				<CardContent sx={{p: "8px 16px;"}}>
					<Typography gutterBottom component="div">
						{user.name}
					</Typography>
					<Box>
						<Typography variant="body2">
							Age: {user.age}
						</Typography>
						<Typography variant="body2">
							Interests: {user.interests}
						</Typography>
					</Box>
				</CardContent>
			</StyledCardActionArea>
		</>
	)
	
	return (
		<Carousel usersComps={usersComps}/>
	);
};

export default UsersCarousel;