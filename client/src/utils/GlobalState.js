import React from 'react';
import { Provider } from 'react-redux';
// Importing the Redux Store we created
import store from './store';

export default function StoreProvider(props) {
	// Return the provider component provided by react-redux
	return <Provider store={store} {...props} />;
}
