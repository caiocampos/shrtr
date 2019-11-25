import React from 'react';
import Constants from '../../constants';

const emptyErr = 'Nothing returned';

class ShrtrService {
	static async shorten(link, shrt) {
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
			}).then(data => {
				if (!data || !data.length) {
					throw emptyErr;
				}
				const shrt = data[0].shrt;
				return Promise.resolve(
					<span>
						Generated at <a href={`/${shrt}`}>/{shrt}</a>
					</span>
				);
			}).catch(error => {
				const promise = error instanceof Promise ? error : Promise.resolve(error);
				return promise.then(err => {
					return Promise.resolve(
						<span>
							Error trying to generate link.<br />
							{err && err.message ? err.message : err}
						</span>
					);
				});
			});
	}
}

export default ShrtrService;
