import React from 'react';
import { styled } from "@mui/system";
import {Image} from '../components/UI/UI'
import { Typography } from "@mui/material";

const StyledUserProfilePreview = styled("div")(({theme}) => ({
	display: "grid",
	margin: "10px 0",
	gridTemplateRows: "20px 1fr",
	gridTemplateColumns: "200px 1fr",
	gridGap: "10px",
	gridTemplateAreas:`
		"image name"
		"image info"
	`,
	
	[theme.breakpoints.down('sm')]: {
		gridTemplateColumns: "100px 1fr",
	},
}));

const UserImage = styled("div")`
	grid-area: image;
	display: flex;
	align-items: center;
`

const Name = styled("div")`
	grid-area: name;
	text-align: center;
`

const Info = styled("div")`
	grid-area: info;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const InfoField = styled("div")(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	flex: "0 0 33%",
	justifyContent: "flex-start",
	textAlign: "center",
	
	[theme.breakpoints.down('sm')]: {
		display: "none",
	},
}))

const Location = styled("div")(({theme}) => ({
	display: "none",
	textAlign: "center",
	marginTop: "10px",
	
	[theme.breakpoints.down('sm')]: {
		display: "block",
	},
}))

const UserProfilePreview = ({userInfo}) => {
	return (
		<StyledUserProfilePreview>
			<UserImage>
				<Image src={userInfo.image}/>
			</UserImage>
			<Name>
				<Typography>{userInfo.name}</Typography>
			</Name>
			<Info>
				<InfoField>
					<Typography>Age</Typography>
					<Typography>{userInfo.age}</Typography>
				</InfoField>
				<InfoField>
					<Typography>Fame rating</Typography>
					<Typography>{userInfo.fameRating}</Typography>
				</InfoField>
				<InfoField>
					<Typography>Location</Typography>
					<Typography>{userInfo.location}</Typography>
				</InfoField>
				<InfoField>
					<Typography>Interests</Typography>
					<Typography>{userInfo.interests}</Typography>
				</InfoField>
				
				<Location>
					<Typography>Location</Typography>
					<Typography>{userInfo.location}</Typography>
				</Location>
			</Info>
		</StyledUserProfilePreview>
	);
};

export default UserProfilePreview;