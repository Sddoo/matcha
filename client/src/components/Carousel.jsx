import React, {useRef} from 'react';
import { styled } from "@mui/system";
import { Container, Box, Card, CardContent, Toolbar } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const CarouselWrap = styled(Container)`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 150px;
	padding: 0 !important;
`

const CarouselContent = styled(Container)`
	width: auto;
	height: 100%;
	position: absolute;
	left: 0px;
	z-index: 0;
	display: flex;
	flex-direction: row;
	background-color: lightcoral;
	padding: 0 !important;
`

const StyledArrowBox = styled(Box)`
	background-color: rgba(0, 0, 0, 0);
	height: 100%;
	width: 50px;
	position: absolute;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	${props => props.align === "left" ? "left: 0" : "right: 0"};
	cursor: pointer;
	transition: background-color 0.2s linear;
	
	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`

const Carousel = () => {
	const carouselRef = useRef();
	const input = [
		<CardContent key={1} sx={{ width: "100px"}}>1</CardContent>,
		<CardContent key={2} sx={{ width: "100px"}}>2</CardContent>,
		<CardContent key={3} sx={{ width: "100px"}}>3</CardContent>,
		<CardContent key={4} sx={{ width: "100px"}}>4</CardContent>,
		<CardContent key={5} sx={{ width: "100px"}}>5</CardContent>,
		<CardContent key={6} sx={{ width: "100px"}}>6</CardContent>,
		<CardContent key={7} sx={{ width: "100px"}}>7</CardContent>,
		<CardContent key={8} sx={{ width: "100px"}}>8</CardContent>,
		<CardContent key={9} sx={{ width: "100px"}}>9</CardContent>,
		<CardContent key={10} sx={{width: "100px"}}>10</CardContent>,
		<CardContent key={11} sx={{width: "100px"}}>11</CardContent>,
		<CardContent key={12} sx={{width: "100px"}}>12</CardContent>
	]
	
	const moveCarousel = (direction) => {
		let step = direction === "back" ? 200 : -200;
		let res = (parseInt(carouselRef.current.style.left) || 0) + step + "px";
		carouselRef.current.style.setProperty("left", res);
		console.log("testCarousel", carouselRef.current.style.left);
	}
	
	return (
		<CarouselWrap>
			<StyledArrowBox align="left" onClick={() => moveCarousel("back")}>
				<ArrowBackIosNewOutlinedIcon/>
			</StyledArrowBox>
			
			<CarouselContent ref={carouselRef}>
				{input.map( (elem, i) =>
					<Card key={i}>
						{elem}
					</Card>
				)}
			</CarouselContent>
			
			<StyledArrowBox align="right" onClick={() => moveCarousel("forward")}>
				<ArrowForwardIosOutlinedIcon/>
			</StyledArrowBox>
		</CarouselWrap>
	);
};

export default Carousel;