import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import validateInputs from "../utils/inputValidation";
import { TextField, Container, Button, Typography } from "@mui/material";
import useHttp from "../hooks/useHttp";
import { useSnackbar } from "notistack";

const StyledRegistrationPage = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RegistrationPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		firstName: '',
		lastName: '',
		password: '',
		repeatedPassword: ''
	});
	const [invalidInputs, setInvalidInputs] = useState([]);
	const {request, error, clearError} = useHttp();
	const history = useHistory();
	const {enqueueSnackbar} = useSnackbar();
	
	const submitHandler = async () => {
		const invalidInputsArr = validateInputs(formData);
		
		if (invalidInputsArr.length) {
			setInvalidInputs(validateInputs(formData));
		} else {
			// let response = await request("https://jsonplaceholder.typicode.com/toods");
			const response = {ok: false};
			
			if (response) {
				history.push("/auth");
			} else {
				enqueueSnackbar("Some server error occurred :( Try again later!", {variant: "error"});
				clearError();
			}
		}
	}
	
	const changeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value});
	}
	
	
	console.log("testRender");
	
	return (
		<StyledRegistrationPage>
			<Typography variant="h5" m={2}>Страница регистрации</Typography>
			<Container maxWidth="xs" sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
				<TextField label="Email" name="email" value={formData.email} onChange={changeHandler} error={invalidInputs.includes("email")} helperText="It should fit email format"/>
				<TextField label="Username" name="username" value={formData.username} onChange={changeHandler} error={invalidInputs.includes("username")} helperText="it should be more than 4 symbols and less than 16"/>
				<TextField label="First name" name="firstName" value={formData.firstName} onChange={changeHandler} error={invalidInputs.includes("firstName")} helperText="it should be more than 4 symbols and less than 16"/>
				<TextField label="Last name" name="lastName" value={formData.lastName} onChange={changeHandler} error={invalidInputs.includes("lastName")} helperText="it should be more than 4 symbols and less than 16"/>
				<TextField label="Password" name="password" value={formData.password} onChange={changeHandler} type="password" error={invalidInputs.includes("password")} helperText="It should contain uppercase and lowercase letters, numbers and should be more than 4 symbols and both passwords should have the same value"/>
				<TextField label="Repeat password" name="repeatedPassword" value={formData.repeatedPassword} onChange={changeHandler} type="password" error={invalidInputs.includes("password")} helperText="It should contain uppercase and lowercase letters, numbers and should be more than 4 symbols and both passwords should have the same value"/>
				<Button onClick={submitHandler}>Зарегистрировать аккаунт</Button>
				<Button component={Link} to="/auth">Auth page</Button>
			</Container>
		</StyledRegistrationPage>
	);
};

export default RegistrationPage;