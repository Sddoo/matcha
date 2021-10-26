import React from 'react';
import styled from 'styled-components';
import { Link, Redirect, useParams } from "react-router-dom";
import {Image, LinearProgressWithLabel} from "../components/UI/UI";
import testImage from "../test.png"
import useHttp from "../hooks/useHttp";
import UserInfo from "../components/UserInfo";
import { Container, Button, Box } from "@mui/material";
import { styled as MUIstyled } from "@mui/system";
import { useSelector } from "react-redux";

const StyledProfilePage = styled.div`
	background-color: lightblue;
	width: 100%;
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 30% 1fr;
	grid-template-rows: auto minmax(300px, 1fr);
	grid-template-areas:
		"aside info"
		"images images";
`

const StyledButtonsContainer = MUIstyled(Container)`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const ProfileAside = styled.aside`
	grid-area: aside;
`

const ProfileAvatar = styled.div`

`

const ProfileActions = styled.div`

`

const ProfileFameRating = styled.div`

`

const Geolocation = styled.div`

`

const ProfileInfo = styled(UserInfo)`
	grid-area: info;
`

const ProfileImages = styled.div`
	grid-area: images;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	background-color: lightgreen;
`

const ProfilePage = () => {
	const paramId = useParams().id;
	const {profileId, token} = useSelector( state => state);
	const {request} = useHttp();
	const owner = paramId === profileId;
	
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
			
			<ProfileInfo/>
			
			<ProfileImages>
				<div><Image src={testImage}/></div>
				<div><Image src={testImage}/></div>
				<div><Image src={testImage}/></div>
				<div><Image src={testImage}/></div>
				<div><Image src={testImage}/></div>
			</ProfileImages>
		</StyledProfilePage>
	);
};

export default ProfilePage;