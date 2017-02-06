import Html from '../app/Html';
import {createStore} from '../app/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createHistory from 'react-router/lib/createMemoryHistory';
import {Provider} from 'react-redux';
import routes from '../app/routes';
import {fetchProducts} from '../app/lib/fetcher'

const productRoutes = {
    init: function(app) {

        // set up landing page
		app.get('*', (req, res, next) => {

			const memoryHistory = createHistory(req.originalUrl);
			let store = createStore(memoryHistory);
			const history = syncHistoryWithStore(memoryHistory, store);

			function hydrateOnClient() {
				res.send(`<!doctype html>${ReactDOM.renderToString(<Html store={store}/>)}`);
			}

			match({history, routes: routes(store), location: req.originalUrl},
				(error, redirectLocation, renderProps) => {
					if (redirectLocation) {
						res.redirect(redirectLocation.pathname + redirectLocation.search);
					} else if (error) {
						console.error('ROUTER ERROR:', error);
						res.status(500);
						hydrateOnClient();
					} else if (renderProps) {
                        //preload the data TODO map to location
						fetchProducts()
							.then((data)=> {

								let state = {
									products:{ isFetching:false, items:data.data.map((item)=>{item.image = item.image.outfit ;return item}), selectedProduct:{}}
								};

								store = createStore(memoryHistory, state);

								const component = (
									<Provider store={store} key="provider">
										<RouterContext {...renderProps} />
									</Provider>
								);
								res.status(200);
								global.navigator = {userAgent: req.headers['user-agent']};
								res.send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Html component={component}
																							   store={store}/>)}`);
							}).catch((error)=>{
							console.error('ROUTER ERROR:', error);
							res.status(500);
							hydrateOnClient();
						})
					} else {
						res.status(404).send('Not found');
					}
				});
        });

    }
};


module.exports = {
    routes: productRoutes
};
