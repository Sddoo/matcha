import React, { useState } from 'react';
import { styled } from "@mui/system";
import Gap from "../components/Gap";
import Field from "../components/Field";
import UserProfilePreview from "../components/UserProfilePreview";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
	Button,
	TextField,
	RadioGroup,
	Radio,
	FormLabel,
	FormControl,
	FormControlLabel,
	Typography
} from "@mui/material";

const StyledBrowsingPage = styled("div")`
	display: grid;
	grid-template-columns: 1fr 20%;
	grid-template-rows: 1fr auto;
	grid-template-areas:
		"request request"
		"response options";
`

const Request = styled("div")`
	grid-area: request;
	background-color: darkkhaki;
	padding: 20px;
`

const MainRequest = styled("div")`
	margin-bottom: 10px;
	text-align: center;
`

const AdvancedRequest = styled("div")`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;
	gap: 15px;
`

const RequestField = styled(Field)`
	flex-direction: column;
	text-align: center;
	flex-basis: 30%;
	flex-grow: 1;
`

const Response = styled("div")`
	grid-area: response;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	background-color: darkcyan;
`

const BrowsingPage = () => {
	const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);
	const [filterOptions, setFilterOptions] = useState({
		ageStart: '',
		ageEnd: '',
		fameStart: '',
		fameEnd: '',
		location: '',
		tags: []
	});
	const [sortOptions, setSortOptions] = useState({
		field: 'age',
		order: 'asc',
	});
	const testUserProfilePreviewArr = Array(10).fill({
		image: testImage,
		name: "Vladislav Portnov",
		age: 35,
		fameRating: 55,
		location: "Rostov-on-Don",
		interests: ["test", "hs"]
	});
	
	if (!useSelector(state => state.token)) { // переделать эту парашу
		return <Redirect to="/auth"/>
	}
	
	const changeFilter = (e) => setFilterOptions({...filterOptions, [e.target.name]: e.target.value})
	
	const changeSort = (e) => setSortOptions({...sortOptions, [e.target.name]: e.target.value});
	
	return (
		<StyledBrowsingPage>
			
			<Request>
				<MainRequest>
					<TextField size={"small"}/>
					<Button>Search</Button>
					<Button onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>{isAdvancedSearch ? "Hide" : "Show"} advanced options</Button>
				</MainRequest>
				{isAdvancedSearch &&
					<AdvancedRequest>
						<RequestField>
							<Typography>Age</Typography>
							<Gap name="age" changeHandler={changeFilter} values={filterOptions}/>
						</RequestField>
						<RequestField>
							<Typography>Fame Rating</Typography>
							<Gap name="fame" changeHandler={changeFilter} values={filterOptions}/>
						</RequestField>
						<RequestField>
							<Typography>Location</Typography>
							<TextField name="location" value={filterOptions.location} onChange={changeFilter} size="small"/>
						</RequestField>
						<RequestField>
							<Typography>Interests</Typography>
							<TextField name="tags" value={filterOptions.tags} onChange={changeFilter} size="small" helperText={"Examples: #geek, #animals, #gameofthrones"}/>
						</RequestField>
					</AdvancedRequest>
				}
			</Request>
			
			<Response>
				{testUserProfilePreviewArr.map((elem, i) => <UserProfilePreview key={i} userInfo={elem}/>)}
			</Response>
			
			<FormControl>
				<FormLabel>Sort field</FormLabel>
				<RadioGroup
					aria-label="sortField"
					value={sortOptions.field}
					name="field"
					onChange={changeSort}>
					<FormControlLabel value="age" control={<Radio/>} label={"Age"}/>
					<FormControlLabel value="location" control={<Radio/>} label={"Location"}/>
					<FormControlLabel value="fameRating" control={<Radio/>} label={"Fame Rating"}/>
					<FormControlLabel value="tags" control={<Radio/>} label={"Tags"}/>
				</RadioGroup>
				
				<FormLabel>Sort order</FormLabel>
				<RadioGroup
					aria-label="sortOrder"
					value={sortOptions.order}
					name="order"
					onChange={changeSort}>
					<FormControlLabel value="asc" control={<Radio/>} label={"Ascending"}/>
					<FormControlLabel value="desc" control={<Radio/>} label={"Descending"}/>
				</RadioGroup>
				
				<Button>Sort!</Button>
			</FormControl>
		</StyledBrowsingPage>
	);
};

export default BrowsingPage;