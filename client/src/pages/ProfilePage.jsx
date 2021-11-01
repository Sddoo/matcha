import React from 'react';
import styled from 'styled-components';
import { Link, Redirect, useParams } from "react-router-dom";
import {Image, LinearProgressWithLabel} from "../components/UI/UI";
import testImage from "../test.png"
import useHttp from "../hooks/useHttp";
import ProfileInfo from "../components/ProfileInfo";
import ProfileImages from "../components/ProfileImages"
import { Container, Button, Box } from "@mui/material";
import { styled as MUIstyled } from "@mui/system";
import { useSelector } from "react-redux";

const StyledProfilePage = styled.div`
	background-color: black;
	width: 100%;
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 30% 1fr;
	grid-template-rows: auto 300px;
	grid-template-areas:
		"aside info"
		"images images";
`

const ProfileAside = styled.aside`
	grid-area: aside;
`

const StyledProfileInfo = styled(ProfileInfo)`
	grid-area: info;
`

const StyledProfileImages = styled(Box)`
	grid-area: images;
`

const StyledButtonsContainer = MUIstyled(Container)`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const ProfileAvatar = styled.div`

`

const ProfileActions = styled.div`

`

const Geolocation = styled.div`

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
			<ProfileAside>
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
							<Button variant="outlined" size={"small"} sx={{mt: "10px", flexGrow: "1"}}>Write message</Button>
						</StyledButtonsContainer> : <></>}
				</ProfileActions>
			</ProfileAside>
			
			<StyledProfileInfo />
			
			<StyledProfileImages>
				<ProfileImages profileImages={profileImages} />
			</StyledProfileImages>
		</StyledProfilePage>
	);
};

export default ProfilePage;