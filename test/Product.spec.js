import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import ConnectedProduct, {Product} from '../app/products/components/Product';
import jsdom from 'mocha-jsdom';

const initialData = {
	"id": 543002,
	"name": "Cashmere wrap",
	"price": "£380",
	"designer": "Madeleine Thompson",
	"image": "//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg"
};

describe('<Product/>', () => {

	jsdom();

	it('should render a title', () => {
		const wrapper = mount(<Product {...initialData}/>);
		expect(wrapper.find('h2').first().text()).to.eql(initialData.name);

	});

	it('should render a price', () => {
		const wrapper = mount(<Product {...initialData}/>);
		expect(wrapper.find('p.price').first().text()).to.eql(initialData.price);

	});

	it('should render a designer', () => {
		const wrapper = mount(<Product {...initialData}/>);
		expect(wrapper.find('p.designer').first().text()).to.eql(initialData.designer)

	});

	it('should render a image', () => {
		const wrapper = mount(<Product {...initialData}/>);
		expect(wrapper.containsAllMatchingElements([
			<img src='//cache.net-a-porter.com/images/products/543002/543002_ou_sl.jpg'/>
		])).to.equal(true);

	});

});
