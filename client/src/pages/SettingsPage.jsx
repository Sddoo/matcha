import React from 'react';
import styled from 'styled-components';

const StyledSettingsPage = styled.div`
	background-color: darkgreen;
`;

const SettingsPage = () => {
	return (
		<StyledSettingsPage>
			<div>Change email</div>
			<div>Change first name</div>
			<div>Change last name</div>
			<div>Change password</div>
		</StyledSettingsPage>
	);
};

export default SettingsPage;