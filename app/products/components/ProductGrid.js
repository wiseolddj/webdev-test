import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import styled from 'styled-components';
import Grid from 'grid-styled'
import {ProductView} from './ProductView';


const _ProductGrid = ({selectedProduct, products, className}) => {
	return products ? (<div className={`${className}`}>
				{products.map((product, index) => {
					return (selectedProduct && selectedProduct.id == product.id) ? (
							<div key={product.id}>
								<ProductView/>
							</div>
						) :
						(

							<Grid key={product.id} xs={1 / 2}
								  sm={1 / 3}
								  md={1 / 4}
								  lg={1 / 5}>
								<Product  {...product} />
							</Grid>);
				})}
			</div>
		) : null;
}

export const StyledProductGrid = styled(_ProductGrid)`
    border: 1px solid #efefef;
`;

StyledProductGrid.propTypes = {
	products: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
	return {
		products: state.products.items,
		selectedProduct: state.products.selectedProduct
	}
}

export const ProductGrid = connect(mapStateToProps)(StyledProductGrid);