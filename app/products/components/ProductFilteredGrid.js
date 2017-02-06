import React, {PropTypes, Component} from 'react'
import Helmet from "react-helmet";
import ProductFilter from './ProductFilter';
import {ProductGrid} from './ProductGrid';
import styled from 'styled-components';

class _ProductFilteredGrid extends Component {
	render() {
		const {className} = this.props;
		return (
			<div className={`productContainer ${className}`}>
				<Helmet
					title="Products"
				/>
				<ProductFilter/>
				<ProductGrid/>
			</div>
		)
	}
}
;

export const ProductFilteredGrid = styled(_ProductFilteredGrid)`
  width:100%;
`;

