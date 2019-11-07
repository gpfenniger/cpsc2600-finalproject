import React, { Component } from 'react';

import Header from './comps/topbar/Header';
import Content from './comps/body/Content';
import LinkBar from './comps/body/LinkBar';
import Footer from './comps/bottombar/Footer';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pageLink: ''
        };
        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        this.setState({ pageLink: page });
    }

    render() {
        return (
            <>
                <Header changePage={this.changePage} />
                <main>
                    <Content pageLink={this.state.pageLink} />
                    <LinkBar />
                </main>
                <Footer />
            </>
        );
    }
}
