import React, { Component } from 'react';

import Header from './comps/topbar/Header';
import Content from './comps/body/Content';
import LinkBar from './comps/body/LinkBar';
import Footer from './comps/bottombar/Footer';

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Content />
                    <LinkBar />
                </main>
                <Footer />
            </>
        );
    }
}
