import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {List} from './src/List';
import {Todo} from './src/Todo';

const Main = () => (<List />);

AppRegistry.registerComponent('Main', () => Main);