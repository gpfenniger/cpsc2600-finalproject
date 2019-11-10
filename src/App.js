import React, { Component } from 'react';

import Header from './comps/topbar/Header';
import Content from './comps/body/Content';
import LinkBar from './comps/body/LinkBar';
import Footer from './comps/bottombar/Footer';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            page: {},
            loginShow: false
        };
        this.changePage = this.changePage.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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
        return (
            <>
                <Header
                    changePage={this.changePage}
                    handleLogin={this.handleLogin}
                />
                <main>
                    <Content
                        page={this.state.page}
                        handleLogin={this.handleLogin}
                        loginShow={this.state.loginShow}
                    />
                    <LinkBar />
                </main>
                <Footer />
            </>
        );
    }
}
