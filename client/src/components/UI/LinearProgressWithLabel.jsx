import React from 'react';
import { Box, LinearProgress, Typography } from "@mui/material";

const LinearProgressWithLabel = ({value}) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">
					{`${Math.round(value)}%`}
				</Typography>
			</Box>
			<Box sx={{ width: '100%' }}>
				<LinearProgress variant="determinate" value={value} />
			</Box>
		</Box>
	);
};

export default LinearProgressWithLabel;