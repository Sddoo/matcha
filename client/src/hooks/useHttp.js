import {useCallback, useState} from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const defaultHeaders = {
	};
	
	const request = useCallback(async (url, method = 'GET', body = null, headers = defaultHeaders) => {
		try {
			setIsLoading(true);
			const response = await fetch(url, {method, body, headers});
			
			if (!response.ok) {
				throw new Error(response.message || "Something went wrong...");
			}
			
			return await response.json();
		} catch (e) {
			setError(e.message);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	}, []);
	
	const clearError = useCallback(() => {
		setError('');
	}, []);
	
	return {isLoading, error, request, clearError};
};

export default useHttp;