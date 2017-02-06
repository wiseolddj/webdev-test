import * as types from './actionTypes';

export default function productApp(state = { isFetching:false, items:[], selectedProduct:{}}, action) {
	if (typeof action === 'undefined') {
		return state;
	}

	switch (action.type) {
		case types.REQUEST_PRODUCT:
			return Object.assign({}, state, {
				isFetching: true,
			})
		case types.RECEIVE_PRODUCT:
			return Object.assign({}, state, {
				isFetching: false,
				selectedProduct: action.data
			})
		case types.UNSELECT_ALL_PRODUCTS:
			return Object.assign({}, state, {
				selectedProduct: {}
			})
		default:
			return state
	}
}
