import Constants from '../constants';
import { ShrtrServiceResponseObject } from '../components/ShrtrServiceResponse';

const emptyErr = 'Nothing returned';

class ShrtrService {
	static shorten(link, shrt) {
		const request = new Request(`${Constants.server}/`, {
			method: 'POST',
			body: JSON.stringify({
				link: link,
				shrt: shrt
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			})
		});
		return fetch(request)
			.then(res => {
				if (!res.ok) {
					throw res.json();
				}
				return res.json();
			})
			.then(data => {
				if (!data || !data.length) {
					throw emptyErr;
				}
				const shrt = data[0].shrt;
				return Promise.resolve(unwrapResponse(shrt));
			})
			.catch(error => {
				const promise =
					error instanceof Promise ? error : Promise.resolve(error);
				return promise.then(err => {
					err = err && err.message ? err.message : err;
					return Promise.resolve(unwrapResponse(null, err));
				});
			});
	}
}

function unwrapResponse(route, error) {
	return ShrtrServiceResponseObject.build(route, error);
}

export default ShrtrService;
