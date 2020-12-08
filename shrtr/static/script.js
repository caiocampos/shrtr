const $ = (selector) => document.querySelector(selector);

const maxColorNum = 1 << 24;

const newColor = () => {
	const randomColor = `#${((maxColorNum * Math.random()) | 0).toString(16)}`;
	document.documentElement.style.setProperty('--main-bg-color', randomColor);
};

newColor();

const shorten = () => {
	const data = {
		link: $('#link').value,
		shrt: $('#shrt').value
	};
	const request = new Request('/', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
	fetch(request)
		.then((res) => {
			if (!res.ok) {
				throw res.json();
			}
			return res.json();
		})
		.then((data) => {
			if (!data || !data.length) {
				throw 'Nothing returned';
			}
			const shrt = data[0].shrt;
			$('#response').innerHTML = `Generated at <a href="/${shrt}">/${shrt}</a>`;
		})
		.catch((error) => {
			const promise = error instanceof Promise ? error : Promise.resolve(error);
			promise.then((err) => {
				$('#response').innerHTML = `Error trying to generate link.<br>${err && err.message
					? err.message
					: err}`;
			});
		});
};
