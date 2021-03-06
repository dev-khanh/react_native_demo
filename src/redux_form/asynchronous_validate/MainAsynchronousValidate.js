/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactForm from './ContactForm';
export default class MainAsynchronousValidate extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ContactForm />
            </Provider>
        );
    }
}
