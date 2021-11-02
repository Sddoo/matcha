import React from 'react';
import { styled } from "@mui/system";
import {Image} from '../components/UI/UI'

const StyledUserProfilePreview = styled("div")`
	display: grid;
	margin: 10px 0;
	grid-template-rows: 20px 1fr;
	grid-template-columns: 200px 1fr;
	grid-gap: 10px;
	grid-template-areas:
		"image name"
		"image info";
`

const UserProfilePreviewImage = styled("div")`
	grid-area: image;
	display: flex;
	align-items: center;
`

const UserProfilePreviewName = styled("div")`
	grid-area: name;
	text-align: center;
`

const UserProfilePreviewInfo = styled("div")`
	grid-area: info;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const UserProfilePreviewInfoField = styled("div")`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	flex: 0 0 33%;
	justify-content: flex-start;
	text-align: center;
`

const UserProfilePreview = ({userInfo}) => {
	return (
		<StyledUserProfilePreview>
			<UserProfilePreviewImage>
				<Image src={userInfo.image}/>
			</UserProfilePreviewImage>
			<UserProfilePreviewName>
				{userInfo.name}
			</UserProfilePreviewName>
			<UserProfilePreviewInfo>
				<UserProfilePreviewInfoField>
					<div>Age</div>
					<div>{userInfo.age}</div>
				</UserProfilePreviewInfoField>
				<UserProfilePreviewInfoField>
					<div>Fame rating</div>
					<div>{userInfo.fameRating}</div>
				</UserProfilePreviewInfoField>
				<UserProfilePreviewInfoField>
					<div>Location</div>
					<div>{userInfo.location}</div>
				</UserProfilePreviewInfoField>
				<UserProfilePreviewInfoField>
					<div>Interests</div>
					<div>{userInfo.interests}</div>
				</UserProfilePreviewInfoField>
			</UserProfilePreviewInfo>
		</StyledUserProfilePreview>
	);
};

export default UserProfilePreview;