import request from 'supertest';
import app from '../app'


describe('GET /', () => {

	it('respond ', function(done) {
		request(app)
			.get('/')
			.expect(200, done);
	});

	it('renders the client bundle.js', (done) => {
		request(app)
			.get('/')
			.expect(/.*bundle.js.*/)
			.expect(200, done);
	})

	it('renders the react components on the server', (done) => {
		request(app)
			.get('/')
			.expect(/.*<div.*productContainer.*/) //TODO better matchers
			.expect(200, done);
	})


	it('has the title Products', (done) => {
		request(app)
			.get('/')
			.expect(/.*<title.*>Products<\/title>.*/) //TODO better matchers
			.expect(200, done);
	})

	it('renders the first set of products by default', (done) =>{
		request(app)
			.get('/')
			.expect(/.*<h2.*>.*<\/h2>.*/) //TODO better matchers
			.expect(200, done);
	})
});
