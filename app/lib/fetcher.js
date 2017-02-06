require('isomorphic-fetch');

const baseURL = 'http://127.0.0.1:3000/api/products';
const itemsPerPage = 40;

export function fetchProducts(page = 0, sortBy = 'price', sortOrder = 'desc') {

	return fetch(`${baseURL}?offset=${page * itemsPerPage}&limit=${itemsPerPage}`).then(
		(response) => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		});
}

export function fetchProductdetail() {

}