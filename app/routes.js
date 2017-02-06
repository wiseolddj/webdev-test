import React from 'react';
import {Route, IndexRoute} from 'react-router';
import products from './products';

const {ProductView, ProductFilteredGrid } = products.components;

export default (store) => {
	return (
		<Route path="/">
			<IndexRoute component={ProductFilteredGrid}/>
			{/*<Route path="/product/:id" component={ProductView}/>*/}
		</Route>);
}
