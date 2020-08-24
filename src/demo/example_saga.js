/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ScreenOne from './sreen_one';
import thunk from 'redux-thunk';

let appState = { payload: [] };

function reducer(state = appState, action) {
    switch (action.type) {
        case 'SETSTATE':
            return {
                ...state,
                payload: action.payload,
            };
    }
    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default class ExampleSaga extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ScreenOne />
            </Provider>
        );
    }
}
