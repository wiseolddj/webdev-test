import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {ProductGrid} from '../app/products/components/ProductGrid';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {Product} from '../app/products/components/Product';
import jsdom from 'mocha-jsdom';

const initialData = [{
	"id": 543002,
	"name": "Cashmere wrap",
	"price": "£380",
	"designer": "Madeleine Thompson",
	"image": {"outfit": "//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg"}
}, {
	"id": 504815,
	"name": "Cutout stretch-jersey dress",
	"price": "£1270",
	"designer": "Donna Karan",
	"image": {"outfit": "//cache.net-a-porter.com/images/products/504815/504815_ou_sl.jpg"}
},
	{
		"id": 491573,
		"name": "Ulindas wrap-effect stretch-crepe jumpsuit",
		"price": "£200",
		"designer": "By Malene Birger",
		"image": {"outfit": "//cache.net-a-porter.com/images/products/491573/491573_ou_sl.jpg"}
	}];

describe('<ProductGrid/>', () => {

	jsdom();

	let mockStore = configureMockStore();
	let store, initialItems;
	beforeEach(() => {
		initialItems = [];
		let initialState = {
			products:{
				items:initialItems
			}
		};
		store = mockStore(initialState);
	});

	it('should render zero items', () => {

		const wrapper = mount(<Provider store={store}><ProductGrid/></Provider>);
		expect(wrapper.find('div')).to.have.length(1);
	});

	it('should render undefined items', () => {
		initialItems = undefined;
		let initialState = {
			products: {items:initialItems}
		};
		store = mockStore(initialState);
		const wrapper = mount(<Provider store={store}><ProductGrid/></Provider>);
		expect(wrapper.find('li')).to.have.length(0);
	});

	it('should render some items', () => {
		initialItems = initialData;
		let initialState = {
			products:{items:initialItems}
		};
		store = mockStore(initialState);
		const wrapper = mount(<Provider store={store}><ProductGrid/></Provider>);
		expect(wrapper.find(Product)).to.have.length(3);
	});

});
