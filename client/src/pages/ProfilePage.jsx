import React from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {Image, Title, Button, Input} from "../components/UI/UI";
import testImage from "../test.png"
import useHttp from "../hooks/useHttp";
import Field from "../components/Field";

const StyledProfilePage = styled.div`
	background-color: lightblue;
	width: 100%;
	display: grid;
	height: 200vh;
	grid-gap: 15px;
	grid-template-columns: 30% 1fr;
	grid-template-rows: 70% 1fr;
	grid-template-areas:
		"avatar info"
		"images images";
`

const ProfileAvatar = styled.div`
	grid-area: avatar;
	background-color: lightcoral;
`

const ProfileInfo = styled.div`
	grid-area: info;
	background-color: lightseagreen;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
`

const ChangeButton = styled(Button)`

`

const ProfileImages = styled.div`
	grid-area: images;
	background-color: lightgreen;
`

const ProfilePage = () => {
	const profileId = useParams().id;
	const {request} = useHttp();
	
	
	
	console.log('testProfId', profileId);
	return (
		<StyledProfilePage>
			<ProfileAvatar>
				<Image src={testImage} alt="avatar"/>
			</ProfileAvatar>
			
			<ProfileInfo>
				<Title>About me</Title>
				<ChangeButton>Change info</ChangeButton>
				<Field name="Gender: " value="someValue" Component={Input}/>
				<Field name="Sexual preferences: " value="someValue" Component={Input}/>
				<Field name="Biography: " value="someValue" Component={Input}/>
				<Field name="Interests: " value="someValue" Component={Input}/>
			</ProfileInfo>
			
			<ProfileImages>
			
			</ProfileImages>
		</StyledProfilePage>
	);
};

export default ProfilePage;