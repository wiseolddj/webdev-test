import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import jsdom from 'mocha-jsdom';

import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {ProductFilteredGrid} from '../app/products/components/';
import ProductFilter from '../app/products/components/ProductFilter';
import {ProductGrid} from '../app/products/components/ProductGrid';

describe('<ProductFilteredGrid/>', () => {

	jsdom();

	let mockStore = configureMockStore();
	let store, initialItems;
	beforeEach(() => {
		initialItems = [];
		let initialState = {
			products: initialItems
		};
		store = mockStore(initialState);
	});

    it('should render <ProductFilter/> and <ProductGrid/>', () => {
        const wrapper = mount(<Provider store={store}><ProductFilteredGrid/></Provider>);
        expect(wrapper.containsAllMatchingElements([
            <ProductFilter/>,
            <ProductGrid/>
        ])).to.equal(true);
    });

});
