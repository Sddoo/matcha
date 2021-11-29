import React, { useEffect, useState } from 'react';
import useHttp from "./useHttp";

const FilterFields = [
	"country",
	"locality",
	"administrative_area_level_3"
]

const UseGeolocation = () => {
	const {request} = useHttp();
	const [location, setLocation] = useState({
		position: {},
		googleAddress: ""
	});
	
	const getLocation = async (position) => {
		console.log("JS API geolocation: ", position);
		let googleAddress = await request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyA3aRZfbMCWSDpf7P7qBlIIZl1o78YpwAo`);
		console.log("Google geocoding", googleAddress);
		googleAddress = googleAddress.results.filter((address) => address.types.some((type) => FilterFields.includes(type)))[0].formatted_address;
		console.log("Filtered google address", googleAddress);
		
		setLocation({
			position,
			googleAddress
		})
	}
	
	const errorLocation = async (error) => {
		if (error.code === 1) {
			console.log("testError", error.message);
		}
	}
	
	useEffect( () => {navigator.geolocation.getCurrentPosition(getLocation, errorLocation)}, []);
	
	return {location};
};

export default UseGeolocation;