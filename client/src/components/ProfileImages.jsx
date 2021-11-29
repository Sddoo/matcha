import React, {useState} from 'react';
import testImage from "../test.jpg"
import { Stack, Card, CardActions, CardMedia, Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxRounded from '@mui/icons-material/AccountBoxRounded';

const ProfileImagesContainer = styled(Stack)(({theme}) => ({
	flexDirection: "column",
	padding: "5px",
	border: `1px solid ${theme.palette.border.main}`,
	borderRadius: "5px",
	backgroundColor: theme.palette.elemBackground.main,
}));

const ButtonContainer = styled(Box)(({theme}) => ({
	textAlign: "right",
	
	[theme.breakpoints.down('lg')]: {
		textAlign: "center",
	},
}));

const Cards = styled(Stack)(({theme}) => ({
	flexDirection: "row",
	justifyContent: "center",
	gap: "20px",
	marginBottom: "10px",
	
	[theme.breakpoints.down('lg')]: {
		flexDirection: "column"
	},
}));

const StyledCard = styled(Card)`
`

const StyledCardMedia = styled(CardMedia)(({theme}) => ({
	height: "200px",
	width: "100%",
	margin: "auto",
	
	[theme.breakpoints.down('lg')]: {
		height: "300px",
	},
}))

const StyledCardActions = styled(CardActions)`
	padding: 0;
	margin: 5px 0;
	display: flex;
	justify-content: space-around;
`;

const UploadInput = styled("input")`
	display: none;
`

const ProfileImages = () => {
	const [modifyMode, setModifyMode] = useState(false);
	const [images, setImages] = useState([
		{
			img: testImage,
			id: 1
		},
		{
			img: testImage,
			id: 2
		},
		{
			img: testImage,
			id: 3
		},
		{
			img: testImage,
			id: 4
		},
		{
			img: testImage,
			id: 5
		}
	])
	
	const submitHandler = () => {
		
	}
	
	const deleteImage = (imageId) => {
		setImages(images.filter((elem) => elem.id !== imageId));
	}
	
	return (
		<ProfileImagesContainer>
			
			<ButtonContainer>
				{modifyMode
					? (<>
						<label htmlFor="contained-button-file">
							<UploadInput accept="image/*" id="contained-button-file" multiple type="file" />
							<Button size={"small"} onClick={submitHandler} component="span">
								Upload image
							</Button>
						</label>
						<Button size={"small"} onClick={() => setModifyMode(false)}>Cancel modifying</Button>
					</>)
					: <Button size={"small"} onClick={() => setModifyMode(true)} disableRipple>Modify profile images</Button> // ripple при клике на эту кнопку срабатывал на Add image
				}
			</ButtonContainer>
			
			<Cards>
				{images.map((elem) =>
					<StyledCard key={elem.id}>
						<StyledCardMedia
							component="img"
							image={elem.img}
							alt="kit"/>
						{modifyMode &&
						<StyledCardActions>
							<Button size={"small"} variant={"contained"}> <AccountBoxRounded/> </Button>
							<Button size={"small"} variant={"contained"} onClick={() => deleteImage(elem.id)}> <DeleteIcon/> </Button>
						</StyledCardActions>}
					</StyledCard>
				)}
			</Cards>
			
		</ProfileImagesContainer>
	);
};

export default ProfileImages;