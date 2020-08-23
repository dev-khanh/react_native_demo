/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ContactForm from './ContactForm';
// const handleSubmit = value => {
//     alert(`submit value = ${value}`);
// };
export default class MainReduxForm extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ContactForm />
            </Provider>
        );
    }
}
