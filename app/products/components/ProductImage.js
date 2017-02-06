import React, {PropTypes} from 'react';
import styled from 'styled-components';


const _ProductImage = ({images, className}) => {
	const {small, large, outfit} = images;
	return  (

		<div className={`${className}`}>
			<img src={small}/>
			{/*<img src={large}/>*/}
			<img src={outfit}/>

		</div>

	)
};

_ProductImage.propTypes = {
	images: React.PropTypes.object,
};

export const ProductImage = styled(_ProductImage)`

  img {
    width:40%;
    margin:8px;
  }

`;