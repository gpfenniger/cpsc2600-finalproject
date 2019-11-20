import React, { Component } from 'react';

import Desktop from './layouts/Desktop';
import Mobile from './layouts/Mobile';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            page: {},
            loginShow: false,
            user: undefined,
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.changePage = this.changePage.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    changePage(page) {
        this.setState({ page: page });
    }

    handleLogin(event) {
        this.setState({ loginShow: !this.state.loginShow });
        event.preventDefault();
    }

    changeKey(loginkey) {
        this.setState({ loginkey: loginkey });
    }

    render() {
        if (this.state.width > 480) {
            return (
                <Desktop
                    changePage={this.changePage}
                    handleLogin={this.handleLogin}
                    page={this.state.page}
                    loginShow={this.state.loginShow}
                    width={this.state.width}
                />
            );
        } else {
            return (
                <Mobile
                    changePage={this.changePage}
                    handleLogin={this.handleLogin}
                    page={this.state.page}
                    loginShow={this.state.loginShow}
                    width={this.state.width}
                />
            );
        }
    }
}
