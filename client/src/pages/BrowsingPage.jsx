import React, { useState } from 'react';
import { styled } from "@mui/system";
import Gap from "../components/UI/Gap";
import UserProfilePreview from "../components/UserProfilePreview";
import testImage from "../testImage";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
	Button, TextField, RadioGroup, Radio, FormLabel, FormControl, FormControlLabel, Typography, Box, Divider
} from "@mui/material";

const StyledBrowsingPage = styled("div")(({theme}) => ({
	display: "grid",
	gridTemplateColumns: "1fr 20%",
	gridTemplateAreas: `
		"request request"
		"response options"
	`,
	gap: "10px",
	
	[theme.breakpoints.down('lg')]: {
		gridTemplateColumns: "100%",
		gridTemplateAreas: `
			"request"
			"options"
			"response"
		`,
	},
}))

const Request = styled(Box)(({theme}) => ({
	gridArea: "request",
	padding: "20px",
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px"
}));

const MainRequest = styled("div")(({theme}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginBottom: "10px",
	textAlign: "center",
}));

const MainInput = styled(TextField)(({theme}) => ({
}))

const AdvancedRequest = styled("div")(({theme}) => ({
	display: "flex",
	justifyContent: "space-around",
	flexWrap: "wrap",
	margin: "0 auto",
	gap: "15px",
	
	[theme.breakpoints.down('lg')]: {
		flexDirection: "column",
		justifyContent: "flex-start",
	}
}));

const RequestField = styled(Box)(({theme}) => ({
	display: "flex",
	justifyContent: "space-between",
	flexWrap: "wrap",
	flexDirection: "column",
	textAlign: "center",
	flexBasis: "30%",
	flexGrow: "1",
}))

const StyledRadioGroup = styled(RadioGroup)(({theme}) => ({
	[theme.breakpoints.down('lg')]: {
		flexDirection: "row",
		justifyContent: "center",
	}
}))

const Response = styled("div")(({theme}) => ({
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	gridArea: "response",
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	padding: "10px"
}));

const StyledFormControl = styled(FormControl)(({theme}) => ({
	backgroundColor: theme.palette.elemBackground.main,
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	padding: "10px"
}));

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
					<MainInput size={"small"}/>
					<Button size={"small"}>Search</Button>
					<Button size={"small"} onClick={() => setIsAdvancedSearch(!isAdvancedSearch)}>{isAdvancedSearch ? "Hide" : "Show"} advanced options</Button>
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
				{testUserProfilePreviewArr.map((elem, i) => (
					<React.Fragment key={i}>
						<UserProfilePreview userInfo={elem}/>
						<Divider sx={{m: "10px 0 10px 0"}} />
					</React.Fragment>
				))}
			</Response>
			
			<StyledFormControl>
				<FormLabel>Sort field</FormLabel>
				<StyledRadioGroup
					aria-label="sortField"
					value={sortOptions.field}
					name="field"
					onChange={changeSort}>
					<FormControlLabel value="age" control={<Radio/>} label={"Age"}/>
					<FormControlLabel value="location" control={<Radio/>} label={"Location"}/>
					<FormControlLabel value="fameRating" control={<Radio/>} label={"Fame Rating"}/>
					<FormControlLabel value="tags" control={<Radio/>} label={"Tags"}/>
				</StyledRadioGroup>
				
				<FormLabel>Sort order</FormLabel>
				<StyledRadioGroup
					aria-label="sortOrder"
					value={sortOptions.order}
					name="order"
					onChange={changeSort}>
					<FormControlLabel value="asc" control={<Radio/>} label={"Ascending"}/>
					<FormControlLabel value="desc" control={<Radio/>} label={"Descending"}/>
				</StyledRadioGroup>
				
				<Button>Sort!</Button>
				
			</StyledFormControl>
			
		</StyledBrowsingPage>
	);
};

export default BrowsingPage;