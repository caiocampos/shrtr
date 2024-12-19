import { ReactNode } from 'react';
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

	static shorten = (link: string, shrt: string): Promise<ReactNode> => {
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
			.then((data) =>
				!data
					? Promise.resolve(unwrapShortenResponse(null, emptyErr))
					: Promise.resolve(unwrapShortenResponse(data.shrt))
			)
			.catch((error) => Promise.resolve(unwrapShortenResponse(null, error as string | Error)));
	};
}

const fetch_retry = (request: Request, n: number, delay?: number): Promise<Response> =>
	fetch(request).catch((error) =>
		n === 1 ? Promise.reject(error) : wait(delay || 5000).then(() => fetch_retry(request, n - 1))
	);

export const wait = (delay: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, delay));

export const parseResponse = async <T>(res: Response): Promise<T> => {
	try {
		const json = await res.json();
		return res.ok ? Promise.resolve(json as T) : Promise.reject(json);
	} catch {
		return Promise.reject('Invalid JSON');
	}
};

export const unwrapShortenResponse = (route: string | null, error?: string | Error): ReactNode =>
	ShortenResponseObject.build(route, error);

export default ShrtrService;
