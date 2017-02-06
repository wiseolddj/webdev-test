import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {selectProduct} from '../actions';


const _Product = ({name, id, price, designer, image, className, onProductClick}) => {

	return (
		<div to={`/product/${id}`} onClick={() => onProductClick(id)} className={className}>
			<img src={image}/>
			<h2>{name}</h2>
			<span>
				<p className="designer">{designer}</p>
				<p className="price">{price}</p>
			</span>
		</div>
	);
}

export const Product = styled(_Product)`
   position: relative;
   display:block;
   color:#222;
   text-decoration:none;
   margin:12px 0;
   text-align: center;
   min-height:252px;
   cursor:pointer;
   border: solid 2px rgba(255,255,255,1);
   
   > h2 {
      font-size: 0.84em;
      margin:0;
      background:rgba(255,255,255,0.7);
      text-align:left;
      width:100%;
      padding:6px 0;
      
   }
   > img{
      margin:0 auto;
      width:100%;
      max-width:300px;
   }
   > span{
      font-size: 0.72em;
      background:rgba(255,255,255,0.7);
      width:100%;
      text-align: left;

      > p.designer {
        color:#676666;
   	  }
   }
   
   &:hover{
       border: solid 2px rgba(202,204,204,0.7);
   }
   

`;

Product.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	designer: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		selectedProduct: state.products.selectedProduct
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onProductClick: (id) => {
			dispatch(selectProduct(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);