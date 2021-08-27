import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Title, Button} from "../components/UI/UI";
import styled from "styled-components";
import validateInputs from "../utils/inputValidation";
// import useHttp from "../hooks/useHttp";

const StyledRegistrationPage = styled.div`
	width: 100vw;
  	height: 100vh;
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
		password: ''
	});
	// const {request} = useHttp();
	
    const submitHandler = async (event) => {
		event.preventDefault();
		let notValidated = validateInputs(formData);
		console.log('notValidated inputs: ',notValidated);
		// const data = await request("https://jsonplaceholder.typicode.com/todos");
    }
    
    const changeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value});
    }
    
    return (
        <StyledRegistrationPage>
	        <Title>Страница регистрации</Title>
            <Form submitHandler={submitHandler}>
	            <Input type="text" name="email" value={formData.email} onChange={changeHandler}/>
	            <Input type="text" name="username" value={formData.username} onChange={changeHandler}/>
	            <Input type="text" name="firstName" value={formData.firstName} onChange={changeHandler}/>
	            <Input type="text" name="lastName" value={formData.lastName} onChange={changeHandler}/>
	            <Input type="password" name="password" value={formData.password} onChange={changeHandler}/>
                <Button>Зарегистрировать аккаунт</Button>
            </Form>
            <Link to="/auth">Auth Page</Link>
        </StyledRegistrationPage>
    );
};

export default RegistrationPage;