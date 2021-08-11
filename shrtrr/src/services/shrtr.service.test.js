import ShrtrService, { parseResponse, promiseError, unwrapShortenResponse, wait } from './shrtr.service';

it('runs shorten method', () => {
	expect(ShrtrService.shorten()).toBeDefined();
});

it('runs count method', () => {
	expect(ShrtrService.count()).toBeDefined();
});

it('runs parseResponse function', () => {
	const res = new Response();
	expect(parseResponse(res)).toBeDefined();
});

it('runs parseResponse function with a error Response', (done) => {
	const res = new Response({ error: 'error' }, { status: 400 });
	parseResponse(res).catch((err) => {
		expect(err).toBeDefined();
		done();
	});
});

it('runs promiseError function with plain text', (done) => {
	promiseError('err').then((data) => {
		expect(data).toBe('err');
		done();
	});
});

it('runs promiseError function with object', (done) => {
	promiseError({ message: 'err' }).then((data) => {
		expect(data).toBe('err');
		done();
	});
});

it('runs promiseError function with Promise', (done) => {
	promiseError(Promise.resolve('err')).then((data) => {
		expect(data).toBe('err');
		done();
	});
});

it('runs unwrapShortenResponse function', () => {
	expect(unwrapShortenResponse('/')).toBeDefined();
});

it('runs wait function', () => {
	expect(wait(1)).toBeDefined();
});
