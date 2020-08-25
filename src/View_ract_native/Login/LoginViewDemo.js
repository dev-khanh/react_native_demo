/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import Login from './login';
import Home from './home';
export default class LoginViewDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Home' };
        console.log('constructor !!!');
        setTimeout(() => {
            console.log('setTimeout !!!');
            this.setState({ currentScreen: 'Login' });
        }, 3000);
    }
    render() {
        const { currentScreen } = this.state;
        let mainScreen = currentScreen === 'Home' ? <Home /> : <Login />;
        return mainScreen;
    }
}

