import React from 'react';
import styled from 'styled-components';
import {Input, Select, Textarea} from "./UI/UI";

const StyledField = styled.div`
	display: flex;
	justify-content: space-between;
`

const FieldName = styled.div`

`

const FieldValue = styled.div`

`

const NamesTranslator = {
	gender: "Gender: ",
	sexPref: "Sex preferences: ",
	biography: "Biography: ",
	interests: "Interests: ",
	username: "Username: ",
	password: "Password: ",
	email: "Email: ",
	firstName: "First name: ",
	lastName: "Last name"
}

const InputTranslator = {
	select: Select,
	textarea: Textarea,
	text: Input
}

const Field = ({name, value, inputSettings = undefined, className}) => { // className need for extending styles
	const TranslatedInput = InputTranslator[inputSettings?.type] || null;
	
	return (
		<StyledField className={className}>
			<FieldName>
				{NamesTranslator[name]}
			</FieldName>
			<FieldValue>
			{inputSettings
				? <TranslatedInput name={name} value={value} {...inputSettings}/>
				: value}
			</FieldValue>
		</StyledField>
	);
};

export default Field;