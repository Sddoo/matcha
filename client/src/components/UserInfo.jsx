import React, { useState } from 'react';
import styled from "styled-components"
import { Input, Textarea, Title2 } from "./UI/UI";
import Field from "./Field";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Stack, Typography, Select, MenuItem, TextField, Divider } from "@mui/material";
import { styled as MUIstyled } from "@mui/system";
import Carousel from "../components/Carousel";

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
		sexPref: "Female",
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
			
			<Divider sx={{mb: "10px"}}/>
			
			<Stack sx={{width: "20%"}}>
				{owner && !modifyMode ? <Button onClick={modifyInfo} size={"small"}>Change info</Button> : <></>}
				{modifyMode ? <Button onClick={cancelModifying} size={"small"}>Cancel modifying</Button> : <></>}
				{modifyMode ? <Button onClick={saveChanges} size={"small"}>Save changes</Button> : <></>}
			</Stack>
			
			<Stack spacing={1}>
				<Stack justifyContent="space-between" direction="row">
					<Typography>Gender</Typography>
					{modifyMode
						? (<Select value={infoValues.gender} name="gender" onChange={changeHandler} size="small">
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Both">Both</MenuItem>
							</Select>)
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.gender}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Age</Typography>
					{modifyMode
						? <TextField type="number" value={infoValues.age} name="age" onChange={changeHandler} size="small" sx={{width: "100px"}}/>
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.age}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Sexual preferences</Typography>
					{modifyMode
						? (<Select value={infoValues.sexPref} name="sexPref" onChange={changeHandler} size="small">
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Both">Both</MenuItem>
							</Select>)
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.sexPref}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Biography</Typography>
					{modifyMode
						? <TextField
							label="Biography"
							multiline
							maxRows={4}
							name="biography"
							value={infoValues.biography}
							onChange={changeHandler}
							variant="filled"
							sx={{width: "300px"}}
						/>
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.biography}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Interests</Typography>
					{modifyMode
						? <TextField
							label="Interests"
							multiline
							maxRows={4}
							name="interests"
							value={infoValues.interests}
							onChange={changeHandler}
							variant="filled"
							sx={{width: "300px"}}
						/>
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.interests}</Typography>
					}
				</Stack>
				
				<Stack justifyContent="space-between" direction="row">
					<Typography>Location</Typography>
					{modifyMode
						? <TextField value={infoValues.location} name="location" onChange={changeHandler} size="small"/>
						: <Typography sx={{width: "300px", textAlign: "right"}}>{infoValues.location}</Typography>
					}
				</Stack>
			</Stack>
			
			<Divider sx={{m: "20px 0 10px 0"}}>
				<Typography>People, who are interested in you</Typography>
			</Divider>
			
			<Visitors>
				<Carousel />
			</Visitors>
			
			<Divider sx={{m: "20px 0 10px 0"}}>
				<Typography>People, who liked you</Typography>
			</Divider>
			
			<Likers>
				<Carousel />
			</Likers>
		</StyledUserInfo>
	);
};

export default UserInfo;