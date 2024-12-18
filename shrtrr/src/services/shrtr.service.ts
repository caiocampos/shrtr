import { JSX } from 'react';
import Constants from '../constants';
import { ShortenResponseObject } from '../components/ShortenResponse';

const emptyErr = 'Nothing returned';

const headers = new Headers({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*'
});

class ShrtrService {
	static count = () => {
		const request = new Request(`${Constants.server}/count`, {
			method: 'GET',
			headers: headers
		});
		return fetch_retry(request, 10).then(parseResponse);
	};

	static shorten = (link: string, shrt: string) => {
		const request = new Request(Constants.server, {
			method: 'POST',
			body: JSON.stringify({
				link: link,
				shrt: shrt.length === 0 ? undefined : shrt
			}),
			headers: headers
		});
		return fetch(request)
			.then(parseResponse<{ shrt: string }>)
			.then((data) => (!data ? Promise.reject(emptyErr) : Promise.resolve(unwrapShortenResponse(data.shrt))))
			.catch((error) => promiseError(error).then((err) => Promise.resolve(unwrapShortenResponse(null, err))));
	};
}

const fetch_retry = (request: Request, n: number, delay?: number): Promise<Response> =>
	fetch(request).catch((error) =>
		n === 1 ? Promise.reject(error) : wait(delay || 5000).then(() => fetch_retry(request, n - 1))
	);

export const wait = (delay: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, delay));

export const parseResponse = <T>(res: Response): Promise<T> =>
	!res.ok ? Promise.reject(res.json()) : (res.json() as Promise<T>);

export const promiseError = (error: Promise<Error | string> | Error | string): Promise<Error | string> => {
	const promise = error instanceof Promise ? error : Promise.resolve(error);
	return promise.then((e) => Promise.resolve(e instanceof Error ? e.message : e));
};

export const unwrapShortenResponse = (route: string | null, error?: string | Error): JSX.Element =>
	ShortenResponseObject.build(route, error);

export default ShrtrService;
