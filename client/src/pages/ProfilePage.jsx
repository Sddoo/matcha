import React, { useState } from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {Image, Title, Button} from "../components/UI/UI";
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

const InfoField = styled(Field)`
	width: 50%;
	margin: 10px 40px;
`

const ModifyButton = styled(Button)`
	width: 150px;
`

const SaveButton = styled(Button)`
	width: 150px;
`

const ProfileImages = styled.div`
	grid-area: images;
	background-color: lightgreen;
`

const ProfilePage = () => {
	const [modifyMode, setModifyMode] = useState(false);
	const [infoValues, setInfoValues] = useState({
		gender: "male",
		sexPref: "female",
		biography: "test",
		interests: "#geek #huntshowdown"
	});
	const profileId = useParams().id;
	const {request} = useHttp();
	
	const modifyInfo = () => {
		setModifyMode(true);
	}
	
	const saveChanges = () => {
		setModifyMode(false);
	}
	
	const changeHandler = (event) => {
		setInfoValues({...infoValues, [event.target.name]: event.target.value});
	}
	
	console.log('testProfId', profileId);
	return (
		<StyledProfilePage>
			<ProfileAvatar>
				<Image src={testImage} alt="avatar"/>
			</ProfileAvatar>
			
			<ProfileInfo>
				<Title>About me</Title>
				<ModifyButton onClick={modifyInfo}>Change info</ModifyButton>
				{modifyMode ? <SaveButton onClick={saveChanges}>Save changes</SaveButton> : <></>}
				<InfoField name="gender" value={infoValues.gender} inputSettings={modifyMode ? {
					type: "select",
					options: ["male", "female"],
					onChange: changeHandler
				} : undefined}/>
				<InfoField name="sexPref" value={infoValues.sexPref} inputSettings={modifyMode ? {
					type: "text",
					onChange: changeHandler
				} : undefined}/>
				<InfoField name="biography" value={infoValues.biography} inputSettings={modifyMode ? {
					type: "text",
					onChange: changeHandler
				} : undefined}/>
				<InfoField name="interests" value={infoValues.interests} inputSettings={modifyMode ? {
					type: "text",
					onChange: changeHandler
				} : undefined}/>
			</ProfileInfo>
			
			<ProfileImages>
			
			</ProfileImages>
		</StyledProfilePage>
	);
};

export default ProfilePage;