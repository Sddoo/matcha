import React, {useState} from 'react';
import testImage from "../test.png";
import { Stack, Card, CardActions, CardMedia, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const ProfileImagesContainer = styled(Stack)`
	flex-direction: column;
	background-color: lightgreen;
`

const ProfileImage = styled(Card)`

`

const ButtonContainer = styled(Box)`
	text-align: right;
`

const Cards = styled(Stack)`
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`

const StyledCard = styled(Card)`
	width: 200px;
`

const StyledCardMedia = styled(CardMedia)`
	height: 200px;
	width: 200px;
`

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
						{modifyMode && <CardActions sx={{p: 0}}>
							<Button size={"small"}>Choose as profile avatar</Button>
							<Button size={"small"} onClick={() => deleteImage(elem.id)}>Delete image</Button>
						</CardActions>}
					</StyledCard>
				)}
			</Cards>
			
		</ProfileImagesContainer>
	);
};

export default ProfileImages;