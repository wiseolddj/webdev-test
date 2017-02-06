import React from 'react';
import {connect} from 'react-redux';
import {unselectAllProducts} from '../actions'
import styled from 'styled-components';
import {ProductImage} from './ProductImage';
import Grid from 'grid-styled'

const _ProductView = ({product, onProductClick, className}) => {
	return product ? (
			<div id={`product_${product.id}`} className={`${className}`}>
				<Grid xs={1}>
					<a href="#!" className="close" onClick={() => onProductClick()}>Close</a>
					{product.onSale ? (<span className="sale"><span>Sale</span></span>) : null }
					<h1>{product.name}</h1>
				</Grid>
				<Grid xs={1} sm={1 / 2}>
					<ProductImage images={product.images}/>
				</Grid>
				<Grid xs={1} sm={1 / 2}>
					<p className="designer">{product.designer}</p>
					<p className="price">{product.price}</p>
					<div className="sizes">
						Sizes:
						<div>
							{product.sizes.map((size, index) => (
								<span key={index} className="size">{size.name}</span>
							))}
						</div>
					</div>
					<div className="badges">
						{product.badges.map((badge, index) => (
							<span key={index} className="badge">{badge.replace(/_/g, ' ')}</span>
						))}
					</div>
				</Grid>
			</div>
		) : null;
}

export const StyledProductView = styled(_ProductView)`
    border: 1px solid #efefef;
    width:100%;
    min-width:100%;
    background:#eee;
     position: relative;
    padding:12px 0;
    
    .sale {
  position: absolute;
  left: -9px; top: -9px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}
.sale span {
   font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 24px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#F70505 0%, #8F0808 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; left: -21px;
}
.sale span::before {
   content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid #8F0808;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #8F0808;
}
.sale span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #8F0808;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #8F0808;
}
    
    p.price {
    	font-size: 2em;
    
    }
    
    h1 {
      font-size: 1.5em;
    }
    
    a.close {
		float:right;
		background:#fff;
		padding:8px;
		margin:4px;
		color:#333;
		border:2px solid #eee;
		text-decoration: none;
    }
    
     a.close:hover {
        background:#eee;
        border:2px solid #fff;
     }
     
     div.sizes{
        overflow:hidden;
        margin:8px 0;
     }
     
     span.size{
		 padding:8px;
		 background:#fff;
		 margin:4px;
		 float:left;
     }
     
     div.badges{
        margin:8px 0 0 0;
     }
     
     span.badge{
		 padding:8px;
		 background:#fff;
		 margin:4px;
		  display: inline;
		  float:left;
     }
`;


const mapStateToProps = (state, ownProps) => {
	return {
		product: state.products.selectedProduct
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onProductClick: () => {
			dispatch(unselectAllProducts())
		}
	}
}

export const ProductView = connect(mapStateToProps, mapDispatchToProps)(StyledProductView);