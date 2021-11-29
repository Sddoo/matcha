import React, {useRef} from 'react';
import { styled } from "@mui/system";
import { Container, Box, Card } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

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

const CarouselWrap = styled(Container)`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 250px;
	padding: 0 !important;
`

const CarouselContent = styled(Box)`
	width: auto;
	height: 100%;
	position: absolute;
	left: 0;
	z-index: 0;
	display: flex;
	flex-direction: row;
	//background-color: lightcoral;
	transition: left 0.5s linear;
	padding: 5px !important;
`

const StyledCardWrap = styled(Card)`
	box-sizing: border-box;
	width: 150px;
	height: 100%;
	margin: 0 10px;
`

const Carousel = ({usersComps}) => {
	const carouselContentRef = useRef();
	const carouselWrapRef = useRef();
	
	/*
	Работает на разности между шириной обертки и контента
	step - хранит значение, на которое нужно сдвинуть контент вперед или назад
	Eсли конец карусели меньше defaultState, то мы делаем шаг difference
	*/
	const moveCarousel = (direction) => {
		let step;
		let res;
		let difference;
		const defaultStep = 500;
		const carouselWrapWidth = carouselWrapRef.current.getBoundingClientRect().width;
		const carouselContentWidth = carouselContentRef.current.getBoundingClientRect().width;
		const left = parseInt(carouselContentRef.current.style.left) || 0;
		
		if (carouselContentWidth <= carouselWrapWidth) return;
		if (direction === "back") {
			difference = -left;
			step = difference <= defaultStep ? difference : defaultStep;
		} else {
			difference = carouselContentWidth - (-left + carouselWrapWidth);
			step = difference >= defaultStep ? -defaultStep : -difference;
		}
		res = (parseInt(carouselContentRef.current.style.left) || 0) + step + "px";
		carouselContentRef.current.style.setProperty("left", res);
	}
	
	return (
		<CarouselWrap ref={carouselWrapRef}>
			<StyledArrowBox align="left" onClick={() => moveCarousel("back")}>
				<ArrowBackIosNewOutlinedIcon/>
			</StyledArrowBox>
			
			<CarouselContent ref={carouselContentRef}>
				{usersComps.map( (elem, i) =>
					<StyledCardWrap key={i}>
						{elem}
					</StyledCardWrap>
				)}
			</CarouselContent>
			
			<StyledArrowBox align="right" onClick={() => moveCarousel("forward")}>
				<ArrowForwardIosOutlinedIcon/>
			</StyledArrowBox>
		</CarouselWrap>
	);
};

export default Carousel;