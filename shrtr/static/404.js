const home = 'https://shrtr.caiocampos.repl.co';

function countDown() {
	const seconds = Number(document.querySelector('#seconds').innerHTML);
	if (!seconds) {
		window.location = home;
	} else {
		document.querySelector('#seconds').innerHTML = `${seconds - 1}`;
		setTimeout(countDown, 1000);
	}
}

setTimeout(countDown, 1000);
