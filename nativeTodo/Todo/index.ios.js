import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Todo} from './src/Todo';
import { Provider } from 'react-redux';
import { store } from './src/store';

const Main = () => (
	<Provider store={store}>
		<Todo />
	</Provider> 
);

AppRegistry.registerComponent('Main', () => Main);
