import {useCallback, useState} from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		try {
			setIsLoading(true);
			const response = await fetch(url, {method, body, headers});
			const data = await response.json();
			
			if (!response.ok) {
				throw new Error(data.message || "Something went wrong...");
			}
			
			return data;
		} catch (e) {
			setError(e.message);
			setIsLoading(false);
			throw e;
		} finally {
			setIsLoading(false);
		}
	}, []);
	
	return {isLoading, error, request};
};

export default useHttp;