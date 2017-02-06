import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk'

function createStoreWithReducer(history, data, reducer) {
	const reduxRouterMiddleware = routerMiddleware(history);
	const middleware = [
		reduxRouterMiddleware,
		thunkMiddleware
	];
	const finalCreateStore = applyMiddleware(...middleware)(_createStore);
	const store = finalCreateStore(reducer, data);
	if (process.env.NODE_ENV === 'development' && module.hot) {
		module.hot.accept('./rootReducer', () => {
			store.replaceReducer(require('./rootReducer').default);
		});
	}
	return store;
}

function createStore(history, data) {
	return createStoreWithReducer(history, data, require('./rootReducer').default);
}

module.exports = {
	createStore,
};