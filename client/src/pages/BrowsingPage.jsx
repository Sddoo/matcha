import React, { useState } from 'react';
import styled from 'styled-components';
import {Input, Button, Title2} from "../components/UI/UI";
import Gap from "../components/Gap";
import Field from "../components/Field";
import UserProfilePreview from "../components/UserProfilePreview";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const StyledBrowsingPage = styled.div`
	display: grid;
	grid-template-columns: 1fr 20%;
	grid-template-rows: 1fr auto;
	grid-template-areas:
		"request request"
		"response options";
`

const Request = styled.div`
	grid-area: request;
	background-color: darkkhaki;
	padding: 20px;
`

const MainRequest = styled.div`
	margin-bottom: 10px;
	text-align: center;
`

const AdvancedRequest = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;
`

const RequestField = styled(Field)`
	flex-direction: column;
	text-align: center;
	flex: 0 0 33%;
`

const Response = styled.div`
	grid-area: response;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	background-color: darkcyan;
`

const Options = styled.div`
	grid-area: options;
	background-color: darkgoldenrod;
`

const Sort = styled.div`

`

const Filter = styled.div`

`

const OptionField = styled(Field)`
	justify-content: space-between;
`

const BrowsingPage = () => {
	const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
	const [formValues, setFormValues] = useState({
		ageStart: '',
		ageEnd: '',
		fameStart: '',
		fameEnd: '',
		location: '',
		tags: []
	});
	const testUserProfilePreview = {
		image: testImage,
		name: "Vladislav Portnov",
		age: 35,
		fameRating: 55,
		location: "Rostov-on-Don",
		interests: ["test", "hs"]
	}
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeHandler = (e) => setFormValues({...formValues, [e.target.name]: e.target.value})
	
	return (
		<StyledBrowsingPage>
			<Request>
				<MainRequest>
					<Input/>
					<Button>Search!</Button>
					<Button onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>{isAdvancedSearch ? "Hide" : "Show"} advanced options</Button>
				</MainRequest>
				{isAdvancedSearch &&
					<AdvancedRequest>
						<RequestField>
							<Gap name="age" changeHandler={changeHandler} values={formValues}/>
						</RequestField>
						<RequestField>
							<Gap name="fame" changeHandler={changeHandler} values={formValues}/>
						</RequestField>
						<RequestField>
							<div>Location</div>
							<Input name="location" value={formValues.location} onChange={changeHandler}/>
						</RequestField>
						<RequestField>
							<div>Interests</div>
							<Input name="tags" value={formValues.tags} onChange={changeHandler}/>
						</RequestField>
					</AdvancedRequest>
				}
			</Request>
			<Response>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
				<UserProfilePreview userInfo={testUserProfilePreview}/>
			</Response>
			<Options>
				<Sort>
					<Title2>Sort</Title2>
					<OptionField>
						<Input type="radio" name="sortField" value="age"/>
						<label>Age</label>
					</OptionField>
					<OptionField>
						<Input type="radio" name="sortField" value="location"/>
						<label>Location</label>
					</OptionField>
					<OptionField>
						<Input type="radio" name="sortField" value="fameRating"/>
						<label>Fame rating</label>
					</OptionField>
					<OptionField>
						<Input type="radio" name="sortField" value="tags"/>
						<label>Tags</label>
					</OptionField>
					<Title2>Sort order</Title2>
					<OptionField>
						<Input type="radio" name="sortOrder" value="asc"/>
						<label>Ascending</label>
					</OptionField>
					<OptionField>
						<Input type="radio" name="sortOrder" value="desc"/>
						<label>Descending</label>
					</OptionField>
					<Button>Sort!</Button>
				</Sort>
			</Options>
		</StyledBrowsingPage>
	);
};

export default BrowsingPage;