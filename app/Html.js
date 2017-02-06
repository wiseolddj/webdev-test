/* eslint react/prefer-stateless-function: 0, react/no-danger: 0, react/forbid-prop-types: 0 */
import React from 'react';
import Helmet from "react-helmet";
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import styleSheet from 'styled-components/lib/models/StyleSheet';

export default class Html extends React.Component {

	render() {
		const { component, store} = this.props;
		const content = component ? ReactDOM.renderToString(component) : '';
		let head = Helmet.rewind();
		const attrs = head.htmlAttributes.toComponent();

		const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');

		return (
			<html lang="en" {...attrs}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				{head.title.toComponent()}
				{head.meta.toComponent()}
				<style id="ssr-style" dangerouslySetInnerHTML={{ __html:styles}} />
			</head>
			<body>
			<div id="root" dangerouslySetInnerHTML={{ __html: content }} />
			<script
				dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
				charSet="UTF-8"
			/>
			<script
				src='/bundle.js'
				charSet="UTF-8"
			/>
			</body>
			</html>
		);
	}
}
Html.propTypes = {
	component: React.PropTypes.node,
	store: React.PropTypes.object,
};