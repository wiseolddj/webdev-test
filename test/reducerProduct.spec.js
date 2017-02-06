import productApp from '../app/products/reducers';
import {expect} from 'chai';

describe('products reducer', () => {

	describe('default', () => {
		it('returns the initial state', () => {
			expect(productApp()).to.eql({items: [],"selectedProduct": {},
				isFetching:false});
		});

	});

})

