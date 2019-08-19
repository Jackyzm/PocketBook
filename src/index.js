/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AppNavigator from './routers/index';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => (
    <Provider store={ store }>
        <AppNavigator />
    </Provider>
);

export default App;
