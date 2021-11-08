import React, { useRef, useState } from 'react';
import { TextField } from "@mui/material";

const AutoComplete = (props) => {
	const inputRef = useRef();
	
	if (inputRef.current) {
		const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
			fields: ["address_components", "geometry", "types", "name"]
		});
		const onPlaceChanged = () => {
			const place = autoComplete.getPlace();
			
			props.onChange({
				target: {
					name: props.name,
					value: place.name
				}
			});
			console.log("testPlace", place);
		}
		autoComplete.addListener("place_changed", onPlaceChanged);
	}
	
	return (
		<TextField {...props} label="Country" inputRef={inputRef}/>
	);
};

export default AutoComplete;