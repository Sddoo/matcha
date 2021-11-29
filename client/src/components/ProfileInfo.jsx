import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Stack, Typography, Select, MenuItem, TextField, Divider, Box } from "@mui/material";
import { styled } from "@mui/system";
import UsersCarousel from "./UsersCarousel";
import useHttp from "../hooks/useHttp";
import testImage from "../test.jpg"
import AutoComplete from "../components/AutoComplete";
import useGeolocation from "../hooks/useGeolocation";

const ProfileInfoContainer = styled("div")(({theme}) => ({
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	padding: "20px 40px",
	display: "flex",
	flexDirection: "column",
}));

const UserTitle = styled("div")(({theme}) => ({
}))

const InfoField = styled(Stack)(({theme}) => ({
	flexDirection: "row",
	justifyContent: "space-between",
	margin: "5px 0",
	
	[theme.breakpoints.down('sm')]: {
		flexDirection: "column",
		alignContent: "center",
		textAlign: "center",
	}
}))

const InfoValue = styled(Typography)`
`;

const ProfileInfo = () => {
	const [modifyMode, setModifyMode] = useState(false);
	const [infoValues, setInfoValues] = useState({
		gender: "Male",
		age: 23,
		sexPref: "Female",
		biography: "test",
		interests: "#geek",
		location: {
			description: "Rostov-on-Don"
		}
	});
	const [oldInfoValues, setOldInfoValues] = useState({});
	const {profileId, token} = useSelector(state => state);
	const paramId = useParams().id;
	const {request} = useHttp();
	const owner = paramId === profileId;
	const users = Array(10).fill(
		{
			image: testImage,
			name: "Vladislav Portnov",
			age: 23,
			interests: "#geek"
		}
	);
	const {location} = useGeolocation();
	
	const autoLocation = () => {
		if (location.googleAddress) {
			setInfoValues({...infoValues, location: {description: location.googleAddress}})
		}
	}
	
	const modifyInfo = () => {
		setOldInfoValues(infoValues);
		setModifyMode(true);
	}
	
	const saveChanges = () => setModifyMode(false);
	
	const cancelModifying = () => {
		setInfoValues({...oldInfoValues});
		setModifyMode(false);
	}
	
	const changeHandler = async (event) => setInfoValues({...infoValues, [event.target.name]: event.target.value})
	
	return (
		<ProfileInfoContainer>
			<UserTitle>
				<Typography variant="h5" m={1}>Vladislav Portnov</Typography>
			</UserTitle>
			
			<Divider sx={{mb: "10px"}}/>
			
			<Stack sx={{width: "150px"}}>
				{owner && !modifyMode ? <Button onClick={modifyInfo} size={"small"}>Change info</Button> : <></>}
				{modifyMode ? <Button onClick={cancelModifying} size={"small"}>Cancel modifying</Button> : <></>}
				{modifyMode ? <Button onClick={saveChanges} size={"small"}>Save changes</Button> : <></>}
			</Stack>
			
			<Stack>
				<InfoField>
					<Typography>Gender</Typography>
					{modifyMode
						? (<Select value={infoValues.gender} name="gender" onChange={changeHandler} size="small">
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Both">Both</MenuItem>
							</Select>)
						: <InfoValue>{infoValues.gender}</InfoValue>
					}
				</InfoField>
				
				<InfoField>
					<Typography>Age</Typography>
					{modifyMode
						? <TextField type="number" value={infoValues.age} name="age" onChange={changeHandler} size="small" inputProps={{ style: {textAlign: 'center'} }} sx={{width: "100%", maxWidth: "250px"}}/> // I haven't found another way to center input text
						: <InfoValue>{infoValues.age}</InfoValue>
					}
				</InfoField>
				
				<InfoField>
					<Typography>Sexual preferences</Typography>
					{modifyMode
						? (<Select value={infoValues.sexPref} name="sexPref" onChange={changeHandler} size="small">
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Both">Both</MenuItem>
							</Select>)
						: <InfoValue>{infoValues.sexPref}</InfoValue>
					}
				</InfoField>
				
				<InfoField>
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
							sx={{width: "100%", maxWidth: "300px"}}
						/>
						: <InfoValue>{infoValues.biography}</InfoValue>
					}
				</InfoField>
				
				<InfoField>
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
							sx={{width: "100%", maxWidth: "300px"}}
						/>
						: <InfoValue>{infoValues.interests}</InfoValue>
					}
				</InfoField>
				
				<InfoField>
					<Typography>Location</Typography>
					{modifyMode
						? <AutoComplete value={infoValues.location} size="small" name="location" onChange={changeHandler} sx={{width: "100%", maxWidth: "300px"}}/>
						: <Box sx={{display: "flex", flexDirection: "column"}}>
							<InfoValue>{infoValues.location.description}</InfoValue>
							{owner && location.googleAddress && <Button onClick={autoLocation}>Autolocation</Button>}
						</Box>
					}
				</InfoField>
			</Stack>
			
			<Divider sx={{m: "20px 0 10px 0"}}>
				<Typography>People, who are interested in you</Typography>
			</Divider>
			
			<UsersCarousel users={users}/>
			
			<Divider sx={{m: "20px 0 10px 0"}}>
				<Typography>People, who liked you</Typography>
			</Divider>
			
			<UsersCarousel users={users}/>
			
		</ProfileInfoContainer>
	);
};

export default ProfileInfo;