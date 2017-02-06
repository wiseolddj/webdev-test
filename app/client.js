import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import {Router, browserHistory} from 'react-router';


import {createStore} from'./redux-store';
import routes from './routes';

const dest = global.document.getElementById('root');
const store = createStore(browserHistory, global.__data);
const history = syncHistoryWithStore(browserHistory, store);

const component = (
	<Router history={history}>
		{routes(store)}
	</Router>
);

ReactDOM.render(
	<Provider store={store} key="provider">
		{component}
	</Provider>,
	dest
);
document.getElementById('ssr-style').remove();
