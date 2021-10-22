import React, { useState } from 'react';
import styled from "styled-components"
import { Input, Textarea, Title2 } from "./UI/UI";
import Field from "./Field";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Stack, Typography, Select, MenuItem, TextField } from "@mui/material";
import { styled as MUIstyled } from "@mui/system";

const StyledUserInfo = styled.div`
	background-color: lightseagreen;
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
`

const UserTitle = styled.div`
	display: flex;
	gap: 10px;
`

const Visitors = styled.div`

`

const VisitorsList = styled.div`

`

const Likers = styled.div`

`

const LikersList = styled.div`

`

const InfoField = styled(Field)`
	width: 80%;
	margin: 10px 40px;
`

const UserInfo = () => {
	const [modifyMode, setModifyMode] = useState(false);
	const [infoValues, setInfoValues] = useState({
		gender: "Male",
		age: 23,
		sexPref: "female",
		biography: "test",
		interests: "#geek",
		location: "Moscow"
	});
	const [oldInfoValues, setOldInfoValues] = useState({});
	const {profileId, token} = useSelector(state => state);
	const paramId = useParams().id;
	const owner = paramId === profileId;
	
	const modifyInfo = () => {
		setOldInfoValues(infoValues);
		setModifyMode(true);
	}
	
	const saveChanges = () => setModifyMode(false);
	
	const cancelModifying = () => {
		setInfoValues({...oldInfoValues});
		setModifyMode(false);
	}
	
	const changeHandler = (event) => setInfoValues({...infoValues, [event.target.name]: event.target.value});
	
	return (
		<StyledUserInfo>
			<UserTitle>
				<Typography variant="h5" m={1}>Vladislav Portnov</Typography>
				<Typography>online</Typography>
			</UserTitle>
			
			<Stack sx={{width: "20%"}}>
				{owner && !modifyMode ? <Button onClick={modifyInfo} size={"small"}>Change info</Button> : <></>}
				{modifyMode ? <Button onClick={cancelModifying} size={"small"}>Cancel modifying</Button> : <></>}
				{modifyMode ? <Button onClick={saveChanges} size={"small"}>Save changes</Button> : <></>}
			</Stack>
			
			<Stack spacing={1}>
				<Stack justifyContent="space-between" direction="row">
					<Typography>Gender:</Typography>
					{modifyMode
						? (<Select value={infoValues.gender} name="gender" onChange={changeHandler} size="small">
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Both">Both</MenuItem>
							</Select>
							)
						: <Typography>{infoValues.gender}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Age:</Typography>
					{modifyMode
						? <TextField type="number" value={infoValues.age} name="age" onChange={changeHandler} size="small"/>
						: <Typography>{infoValues.age}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Sexual preferences:</Typography>
					{modifyMode
						? <Select value={infoValues.sexPref} name="sexPref" onChange={changeHandler} options={["male", "female", "other"]}/>
						: <Typography>{infoValues.sexPref}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Biography:</Typography>
					{modifyMode
						? <Textarea value={infoValues.biography} name="biography" onChange={changeHandler}/>
						: <Typography>{infoValues.biography}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Interests:</Typography>
					{modifyMode
						? <Textarea value={infoValues.interests} name="interests" onChange={changeHandler}/>
						: <Typography>{infoValues.interests}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Location:</Typography>
					{modifyMode
						? <Input type="text" value={infoValues.location} name="location" onChange={changeHandler}/>
						: <Typography>{infoValues.location}</Typography>
					}
				</Stack>
			</Stack>
			
			<Visitors>
				<Title2>
					People, who are interested in you
				</Title2>
				<VisitorsList>
				
				</VisitorsList>
			</Visitors>
			
			<Likers>
				<Title2>
					People, who liked you
				</Title2>
				<LikersList>
				
				</LikersList>
			</Likers>
		</StyledUserInfo>
	);
};

export default UserInfo;