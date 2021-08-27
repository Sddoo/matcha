import React from 'react';
import styled from 'styled-components';

const StyledSearchPage = styled.div`
	display: grid;
	grid-template-columns: 1fr 20%;
	grid-template-rows: 10vh 80vh;
	grid-template-areas:
		"request request"
		"response filter";
`;

const Request = styled.div`
	grid-area: request;
	background-color: darkkhaki;
`;

const Response = styled.div`
	grid-area: response;
	background-color: darkcyan;
`;

const Filter = styled.div`
	grid-area: filter;
	background-color: darkgoldenrod;
`;

const SearchPage = () => {
	return (
		<StyledSearchPage>
			<Request>
			
			</Request>
			<Response>
			
			</Response>
			<Filter>
			
			</Filter>
		</StyledSearchPage>
	);
};

export default SearchPage;