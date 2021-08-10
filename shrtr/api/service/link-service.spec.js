describe('Test the LinkService', () => {
	const Service = require('../service');
	const linkService = new Service().link;
	const emptyRequest = {
		message: 'Empty request body'
	};
	const shrtTest = 'TESTE@@';
	const expectError = 'Expected Error';

	test('It should response the countAll method', (done) => {
		linkService.countAll(
			(data) => {
				expect(data).toBeGreaterThanOrEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the count method with empty request', (done) => {
		linkService.count(
			{},
			(data) => {
				expect(data).toBeGreaterThanOrEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the count method', (done) => {
		linkService.count(
			{ shrt: 'TEST' },
			(data) => {
				expect(data).toEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the findAll method', (done) => {
		linkService.findAll(
			(data) => {
				expect(data).toBeDefined();
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the find method with empty request', (done) => {
		linkService.find(
			{},
			(data) => {
				expect(data).toBeDefined();
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the find method', (done) => {
		linkService.find(
			{ shrt: 'TEST' },
			(data) => {
				expect(data).toEqual([]);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the generate method with empty request', (done) => {
		linkService.generate(
			{},
			() => done(expectError),
			(error) => {
				expect(error).toEqual(emptyRequest);
				done();
			}
		);
	});

	test('It should response the generate method', (done) => {
		linkService.generate(
			{ shrt: shrtTest, link: 'teste' },
			(data) => {
				expect(data).toBeDefined();
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the generate method with random shrt', (done) => {
		linkService.generate(
			{ link: 'teste' },
			(data) => {
				expect(data).toBeDefined();
				const [el] = [...data];
				expect(el).toBeDefined();
				linkService.remove(
					el,
					(data) => {
						expect(data).toBeDefined();
						done();
					},
					(error) => done(error)
				);
			},
			(error) => done(error)
		);
	});

	test('It should response the generate method trying generate the same link', (done) => {
		linkService.generate(
			{ shrt: shrtTest, link: 'teste' },
			() => done(expectError),
			(error) => {
				expect(error).toEqual({
					message: 'The alias already exists, try another'
				});
				done();
			}
		);
	});

	test('It should response the update method with empty request', (done) => {
		linkService.update(
			{},
			() => done(expectError),
			(error) => {
				expect(error).toEqual(emptyRequest);
				done();
			}
		);
	});

	test('It should response the find and update methods', (done) => {
		linkService.find(
			{ shrt: shrtTest },
			(obj) => {
				const [el] = [...obj];
				expect(el).toBeDefined();
				el.link = 'link2';
				linkService.update(
					el,
					(data) => {
						expect(data).toBeDefined();
						done();
					},
					(error) => done(error)
				);
			},
			(error) => done(error)
		);
	});

	test('It should response the remove method with empty request', (done) => {
		linkService.remove(
			{},
			() => done(expectError),
			(error) => {
				expect(error).toEqual(emptyRequest);
				done();
			}
		);
	});

	test('It should response the find and remove methods', (done) => {
		linkService.find(
			{ shrt: shrtTest },
			(obj) => {
				const [el] = [...obj];
				expect(el).toBeDefined();
				linkService.remove(
					el,
					(data) => {
						expect(data).toBeDefined();
						done();
					},
					(error) => done(error)
				);
			},
			(error) => done(error)
		);
	});
});
