import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import loadScript from "../../utils/loadScript";

const autocompleteService = { current: null };

export default function GoogleMaps(props) {
	const [value, setValue] = React.useState(props.value);
	const [inputValue, setInputValue] = React.useState('');
	const [options, setOptions] = React.useState([]);
	const loaded = React.useRef(false);
	
	if (typeof window !== 'undefined' && !loaded.current) {
		if (!document.querySelector('#google-maps')) {
			loadScript(
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3aRZfbMCWSDpf7P7qBlIIZl1o78YpwAo&libraries=places',
				document.querySelector('head'),
				'google-maps',
			);
		}
		
		loaded.current = true;
	}
	
	const fetch = React.useMemo(
		() =>
			throttle((request, callback) => {
				autocompleteService.current.getPlacePredictions(request, callback);
			}, 200),
		[],
	);
	
	React.useEffect(() => {
		let active = true;
		
		if (!autocompleteService.current && window.google) {
			autocompleteService.current =
				new window.google.maps.places.AutocompleteService();
		}
		if (!autocompleteService.current) {
			return undefined;
		}
		
		if (inputValue === '') {
			setOptions(value ? [value] : []);
			return undefined;
		}
		
		fetch({ input: inputValue }, (results) => {
			if (active) {
				let newOptions = [];
				
				if (value) {
					newOptions = [value];
				}
				
				if (results) {
					newOptions = [...newOptions, ...results];
				}
				
				setOptions(newOptions);
			}
		});
		
		return () => {
			active = false;
		};
	}, [value, inputValue, fetch]);
	
	return (
		<Autocomplete
			id="google-map-demo"
			{...props}
			getOptionLabel={(option) =>
				typeof option === 'string' ? option : option.description
			}
			filterOptions={(x) => x}
			options={options}
			autoComplete
			size="small"
			includeInputInList
			filterSelectedOptions
			value={value}
			onChange={(event, newValue) => {
				setOptions(newValue ? [newValue, ...options] : options);
				props.onChange({target: {value: newValue, name: "location"}})
				setValue(newValue);
			}}
			onInputChange={(event, newInputValue) => {
				setInputValue(newInputValue);
			}}
			renderInput={(params) => (
				<TextField {...params} label="Add a location" fullWidth />
			)}
			renderOption={(props, option) => {
				const matches = option.structured_formatting.main_text_matched_substrings;
				const parts = parse(
					option.structured_formatting.main_text,
					matches.map((match) => [match.offset, match.offset + match.length]),
				);
				
				return (
					<li {...props}>
						<Grid container alignItems="center">
							<Grid item>
								<Box
									component={LocationOnIcon}
									sx={{ color: 'text.secondary', mr: 2 }}
								/>
							</Grid>
							<Grid item xs>
								{parts.map((part, index) => (
									<span
										key={index}
										style={{
											fontWeight: part.highlight ? 700 : 400,
										}}
									>
                    {part.text}
                  </span>
								))}
								
								<Typography variant="body2" color="text.secondary">
									{option.structured_formatting.secondary_text}
								</Typography>
							</Grid>
						</Grid>
					</li>
				);
			}}
		/>
	);
}
