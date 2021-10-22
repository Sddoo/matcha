import React, {useState} from 'react';
import styled from 'styled-components';
import Field from '../components/Field';
import { Input } from '../components/UI/UI';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const StyledSettingsPage = styled.div`
	background-color: lightblue;
	height: 100vh;
	padding: 30px 0;
`

const StyledField = styled(Field)`
	width: 60%;
	margin: 30px auto;
	
	& > * {
		flex: 0 0 33%;
	}
`

const SettingsPage = () => {
	const [changeEmail, setChangeEmail] = useState(false);
	const [changeFirstName, setChangeFirstName] = useState(false);
	const [changeLastName, setChangeLastName] = useState(false);
	const [changePassword, setChangePassword] = useState(false);
	const [newEmail, setNewEmail] = useState("");
	const [newFirstName, setNewFirstName] = useState("");
	const [newLastName, setNewLastName] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	return (
		<StyledSettingsPage>
			
			<StyledField>
				<div>Email:</div>
				<div>dkflbr-09@mail.ru</div>
				{changeEmail
					? <div onClick={() => setChangeEmail(false)}>Cancel</div>
					: <div onClick={() => setChangeEmail(true)}>Change</div>}
				{changeEmail && (
					<>
						<div>New email:</div>
						<Input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
						<button>Submit</button>
					</>
				)}
			</StyledField>
			<StyledField>
				<div>First name:</div>
				<div>What is love</div>
				{changeFirstName
					? <div onClick={() => setChangeFirstName(false)}>Cancel</div>
					: <div onClick={() => setChangeFirstName(true)}>Change</div>}
				{changeFirstName && (
					<>
						<div>New first name:</div>
						<Input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
						<button>Submit</button>
					</>
				)}
			</StyledField>
			<StyledField>
				<div>Last name:</div>
				<div>Portnov</div>
				{changeLastName
					? <div onClick={() => setChangeLastName(false)}>Cancel</div>
					: <div onClick={() => setChangeLastName(true)}>Change</div>}
				{changeLastName && (
					<>
						<div>New last name:</div>
						<Input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
						<button>Submit</button>
					</>
				)}
			</StyledField>
			<StyledField>
				<div>Password:</div>
				<div>*********</div>
				{changePassword
					? <div onClick={() => setChangePassword(false)}>Cancel</div>
					: <div onClick={() => setChangePassword(true)}>Change</div>}
				{changePassword && (
					<>
						<div>Old password:</div>
						<Input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
						<div> </div>
						<div>New password:</div>
						<Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
						<button>Submit</button>
					</>
				)}
			</StyledField>
			
		</StyledSettingsPage>
	);
};

export default SettingsPage;