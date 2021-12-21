import React from 'react';
import { Link, Redirect, useParams } from "react-router-dom";
import LinearProgressWithLabel from "../components/UI/LinearProgressWithLabel";
import Image from "../components/UI/Image";
import testImage from "../test.jpg"
import useHttp from "../hooks/useHttp";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImages from "../components/ProfileImages"
import { Container, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

const StyledProfilePage = styled("div")(({ theme }) => ({
	display: "grid",
	gridGap: "15px",
	gridTemplateColumns: "300px 1fr",
	gridTemplateRows: "auto auto",
	gridTemplateAreas:`
		"aside info"
		"images images"
	`,
	
	[theme.breakpoints.down('lg')]: {
		gridTemplateAreas:`
			"aside"
			"info"
			"images"
		`,
		gridTemplateColumns: "100%",
		gridTemplateRows: "auto auto auto"
	},
	
}))

const StyledProfileAside = styled("aside")(({theme}) => ({
	gridArea: "aside",
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	padding: "10px",
	backgroundColor: theme.palette.elemBackground.main
}));

const StyledProfileInfo = styled(ProfileInfo)`
	grid-area: info;
`

const StyledProfileImages = styled(Box)`
	grid-area: images;
`

const ProfileAvatar = styled("div")`
	max-width: 400px;
	margin: auto;
`

const ProfileActions = styled("div")(({theme}) => ({
	width: "100%",
	margin: "auto"
}))

const StyledButtonsContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const ProfilePage = () => {
	const paramId = useParams().id;
	const {profileId, token} = useSelector( state => state);
	const {request} = useHttp();
	const owner = paramId === profileId;
	const profileImages = [
		testImage,
		testImage,
		testImage,
		testImage,
		testImage
	]
	
	if (!token) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	return (
		<StyledProfilePage>
			<StyledProfileAside>
				<ProfileAvatar>
					<Image src={testImage} alt="avatar"/>
				</ProfileAvatar>
				<ProfileActions>
					<Box sx={{p: "0 20px 10px"}}>
						<LinearProgressWithLabel value={61} />
					</Box>
					{owner ?
						<StyledButtonsContainer>
							<Button variant="outlined" size={"small"} component={Link} to="/profile/123">Like</Button>
							<Button variant="outlined" size={"small"}>Report</Button>
							<Button variant="outlined" size={"small"}>Block</Button>
							<Button variant="outlined" size={"small"} sx={{mt: "10px", flexGrow: "1", flexBasis: "100%"}}>Write message</Button>
						</StyledButtonsContainer> : <></>}
				</ProfileActions>
			</StyledProfileAside>
			
			<StyledProfileInfo />
			
			<StyledProfileImages>
				<ProfileImages profileImages={profileImages} />
			</StyledProfileImages>
		</StyledProfilePage>
	);
};

export default ProfilePage;