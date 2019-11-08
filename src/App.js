import React, { Component } from 'react';

import Header from './comps/topbar/Header';
import Content from './comps/body/Content';
import LinkBar from './comps/body/LinkBar';
import Footer from './comps/bottombar/Footer';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            page: {}
        };
        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        this.setState({ page: page });
    }

    render() {
        return (
            <>
                <Header changePage={this.changePage} />
                <main>
                    <Content page={this.state.page} />
                    <LinkBar />
                </main>
                <Footer />
            </>
        );
    }
}
