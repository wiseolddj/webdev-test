import * as types from './actionTypes';
import fetch from 'isomorphic-fetch'


export const selectProduct = (id) => {
	return dispatch => {
		dispatch(requestProduct(id))
		return fetch(`http://127.0.0.1:3000/api/product/${id}`)
			.then(response => response.json())
			.then(json => dispatch(receiveProduct(id, json)))
			.then(()=>{

			document.getElementById(`product_${id}`).scrollIntoView()

			})

	}
}


export const unselectAllProducts = () => {
	return {
		type: types.UNSELECT_ALL_PRODUCTS
	}
}

function requestProduct(id) {
	return {
		type: types.REQUEST_PRODUCT,
		id:id
	}
}

function receiveProduct(id, json) {
	return {
		type: types.RECEIVE_PRODUCT,
		id:id,
		data: json
	}
}
