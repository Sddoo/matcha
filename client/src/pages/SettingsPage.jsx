import React, {useState} from 'react';
import Field from '../components/Field';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Stack, Typography, Button, TextField, Divider, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import validateInputs from "../utils/inputValidation";
import useHttp from "../hooks/useHttp";

const StyledSettingsPage = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	minHeight: "80vh",
	height: "auto",
	padding: "30px",
}));

const StyledField = styled(Field)`
	width: 60%;
	margin: 30px auto;
	
	& > * {
		flex: 0 0 33%;
	}
`

const StyledSettingsContainer = styled(Stack)`
`

const SettingsPage = () => {
	const [invalidInputs, setInvalidInputs] = useState([]);
	const {request} = useHttp();
	const [openedFields, setOpenedFields] = useState({
		email: false,
		firstName: false,
		lastName: false,
		password: false
	});
	const [inputsData, setInputsData] = useState({
		newEmail: "",
		newFirstName: "",
		newLastName: "",
		oldPassword: "",
		newPassword: "",
		repeatedPassword: ""
	});
	const [currentData, setCurrentData] = useState({
		email: "",
		firstName: "",
		lastName: ""
	});
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeHandler = (e) => {
		setInputsData({...inputsData, [e.target.name]: e.target.value});
	}
	
	const toggleSetting = (e) => {
		setOpenedFields({...openedFields, [e.target.name]: !openedFields[e.target.name]})
	}
	
	const submitHandler = () => {
		const invalidInputsArr = validateInputs(inputsData, { emptyValid: true }); // add validation only for opened inputs
		
		if (invalidInputsArr.length) {
			setInvalidInputs(invalidInputsArr);
		} else {
			setInvalidInputs([]);
		}
	}
	
	return (
		<StyledSettingsPage>
			
			<Typography variant="h5" gutterBottom align="center" m={"0 0 20px 0"}>Settings page</Typography>
			
			<StyledSettingsContainer>
				
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<Typography>Email</Typography>
					</Grid>
					<Grid item xs={8} align="center">
						<Typography>currentData.email</Typography>
					</Grid>
					<Grid item xs={2} align="center">
						<Button name="email" onClick={toggleSetting} size="small">
							{openedFields.email ? "Close" : "Change"}
						</Button>
					</Grid>
					{openedFields.email && (
						<>
							<Grid item xs={2}> </Grid>
							<Grid item xs={8} align="center">
								<TextField
									value={inputsData.newEmail}
									name="newEmail"
									onChange={changeHandler}
									error={invalidInputs.includes("newEmail")}
									helperText={invalidInputs.includes("newEmail") ? "It should fit email format": ""}
									size="small"/>
							</Grid>
							<Grid item xs={2}> </Grid>
						</>
					)}
				</Grid>
				
				<Divider sx={{m: "10px 0 10px 0"}} />
				
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<Typography>First name</Typography>
					</Grid>
					<Grid item xs={8} align="center">
						<Typography>currentData.firstName</Typography>
					</Grid>
					<Grid item xs={2} align="center">
						<Button name="firstName" onClick={toggleSetting} size="small">
							{openedFields.firstName ? "Close" : "Change"}
						</Button>
					</Grid>
					{openedFields.firstName && (
						<>
							<Grid item xs={2}> </Grid>
							<Grid item xs={8} align="center">
								<TextField
									value={inputsData.newFirstName}
									name="newFirstName"
									onChange={changeHandler}
									error={invalidInputs.includes("newFirstName")}
									size="small"/>
							</Grid>
							<Grid item xs={2}> </Grid>
						</>
					)}
				</Grid>
				
				<Divider sx={{m: "10px 0 10px 0"}} />
				
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<Typography>Last name</Typography>
					</Grid>
					<Grid item xs={8} align="center">
						<Typography>currentData.lastName</Typography>
					</Grid>
					<Grid item xs={2} align="center">
						<Button name="lastName" onClick={toggleSetting} size="small">
							{openedFields.lastName ? "Close" : "Change"}
						</Button>
					</Grid>
					{openedFields.lastName && (
						<>
							<Grid item xs={2}> </Grid>
							<Grid item xs={8} align="center">
								<TextField
									value={inputsData.newLastName}
									name="newLastName"
									onChange={changeHandler}
									error={invalidInputs.includes("newLastName")}
									size="small"/>
							</Grid>
							<Grid item xs={2}> </Grid>
						</>
					)}
				</Grid>
				
				<Divider sx={{m: "10px 0 10px 0"}} />
				
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<Typography>Password</Typography>
					</Grid>
					<Grid item xs={8} align="center">
						<Typography>********</Typography>
					</Grid>
					<Grid item xs={2} align="center">
						<Button name="password" onClick={toggleSetting} size="small">
							{openedFields.password ? "Close" : "Change"}
						</Button>
					</Grid>
					{openedFields.password && (
						<>
							<Grid item xs={4}>
								<Typography>Old password</Typography>
							</Grid>
							<Grid item xs={4} align="center">
								<TextField
									value={inputsData.oldPassword}
									name="oldPassword"
									type="password"
									onChange={changeHandler}
									error={invalidInputs.includes("oldPassword")}
									size="small"/>
							</Grid>
							<Grid item xs={4}> </Grid>
							
							<Grid item xs={4}>
								<Typography>New password</Typography>
							</Grid>
							<Grid item xs={4} align="center">
								<TextField
									value={inputsData.newPassword}
									name="newPassword"
									type="password"
									onChange={changeHandler}
									error={invalidInputs.includes("newPassword")}
									size="small"/>
							</Grid>
							<Grid item xs={4}> </Grid>
							
							<Grid item xs={4}>
								<Typography>Repeat new password</Typography>
							</Grid>
							<Grid item xs={4} align="center">
								<TextField
									value={inputsData.repeatedPassword}
									name="repeatedPassword"
									type="password"
									onChange={changeHandler}
									error={invalidInputs.includes("repeatedPassword")}
									helperText="It should contain uppercase and lowercase letters, numbers and should be more than 4 symbols and both passwords should have the same value"
									size="small"/>
							</Grid>
							<Grid item xs={4}> </Grid>
						</>
					)}
				</Grid>
				
				<Divider sx={{m: "10px 0 10px 0"}} />
				
			</StyledSettingsContainer>
			
			<Box sx={{width: "200px", margin: "auto", textAlign: "center"}}>
				<Button onClick={submitHandler}>Submit changes</Button>
			</Box>
			
		</StyledSettingsPage>
	);
};

export default SettingsPage;