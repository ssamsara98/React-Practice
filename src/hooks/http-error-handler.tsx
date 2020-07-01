import { useState, useEffect } from "react";

export default (httpClient: any) => {
	const [error, setError] = useState(null);

	const reqInterceptor = httpClient.interceptors.request.use((req: any) => {
		setError(null);
		return req;
	});
	const resInterceptor = httpClient.interceptors.response.use(
		(res: any) => res,
		(err: any) => {
			setError(err);
		}
	);

	useEffect(() => {
		return () => {
			httpClient.interceptors.request.eject(reqInterceptor);
			httpClient.interceptors.response.eject(resInterceptor);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reqInterceptor, resInterceptor]);

	const errorConfirmedHandler = () => {
		setError(null);
	};

	return [error, errorConfirmedHandler];
};
