import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useHttp from "../hooks/useHttp";
import {useDispatch} from "react-redux";
import { useSnackbar } from "notistack";
import {
	Button,
	Container,
	TextField,
	Typography,
	Alert,
	AlertTitle,
} from "@mui/material";

import LoadingButton from '@mui/lab/LoadingButton';


const StyledAuthPage = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const AuthPage = () => {
	const [invalidAuth, setInvalidAuth] = useState(false);
	const { loading, error, request, clearError } = useHttp();
	const history = useHistory();
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	
	const submitHandler = async () => {
		// let response = await request("https://jsonplaceholder.typicode.com/todos");
		const response = {token: "testToken", profileId: "12345"};
		
		if (response) {
			dispatch({type: "AUTH", payload: {
				token: response.token,
				profileId: response.profileId
			}});
			sessionStorage.setItem("token", response.token);
			localStorage.setItem("token", response.token);
			history.push(`/profile/${response.profileId}`);
		} else {
			setInvalidAuth(true);
		}
	}
	
	useEffect(() => {
		if (error) {
			enqueueSnackbar("Some server error occurred :( Try again later!", {variant: "error"});
		}
		clearError();
	}, [error])
	
	const changeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value});
	}

	return (
		<StyledAuthPage>
			<Typography variant="h5" m={2}>Страница авторизации</Typography>
			
			{invalidAuth ?
			<Alert severity="error" sx={{mb: "20px"}}>
				<AlertTitle>Error</AlertTitle>
				Wrong username or password — <strong>check it out!</strong>
			</Alert> : <></>}
			
			<Container maxWidth="xs" sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
				<TextField label="Username" name="username" value={formData.username} onChange={changeHandler} error={invalidAuth}/>
				<TextField label="Password" name="password" value={formData.password} onChange={changeHandler} error={invalidAuth} type="password"/>
				<LoadingButton loading={loading} onClick={submitHandler}>Зайти</LoadingButton>
				<Button component={Link} to="/registration">Registration page</Button>
			</Container>
		</StyledAuthPage>
	);
}

export default AuthPage;