import React, { useEffect } from 'react';
import useHttp from "./useHttp";

const UseGeolocation = () => {
	const {request} = useHttp();
	
	const getLocation = async (position) => {
		console.log("JS API geolocation: ", position);
		console.log("Google geocoding: ", await request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyA3aRZfbMCWSDpf7P7qBlIIZl1o78YpwAo`));
	}
	
	const errorLocation =  async (error) => {
		if (error.code === 1) {
			console.log("testError", error.message);
		}
	}
	
	useEffect( () => navigator.geolocation.getCurrentPosition(getLocation, errorLocation), []);
};

export default UseGeolocation;