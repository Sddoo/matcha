import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Form, Title, Button} from "../components/UI/UI";
import Field from "../components/Field";
import useHttp from "../hooks/useHttp";

const StyledAuthPage = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const AuthPage = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const {request} = useHttp();
	const history = useHistory();
	
    const submitHandler = async (event) => {
		event.preventDefault();
		const data = await request("https://jsonplaceholder.typicode.com/todos");
		
		if (data) { // всегда true, исправить
			history.push('/profile/123');
		}
    }
    
    const changeHandler = (event) => {
		setFormData({...formData, [event.target.name]: event.target.value});
    }

    return (
        <StyledAuthPage>
	        <Title>Страница авторизации</Title>
            <Form onSubmit={submitHandler}>
	            <Field name="username" value={formData.username} inputSettings={{type: 'text', onChange: changeHandler}}/>
	            <Field name="password" value={formData.password} inputSettings={{type: 'text', onChange: changeHandler}}/>
                <Button>Зайти</Button>
            </Form>
            <Link to="/registration">RegistrationPage</Link>
        </StyledAuthPage>
    );
}

export default AuthPage;