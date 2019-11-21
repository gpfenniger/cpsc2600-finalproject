import React, { Component } from 'react';
import Header from '../main/Header';
import Footer from '../main/Footer';
import Content from '../main/Content';

export default class Mobile extends Component {
    render() {
        return (
            <div className="mobile">
                <Header changePage={this.props.changePage} mobile />
                <Content
                    page={this.props.page}
                    handleLogin={this.props.handleLogin}
                    loginShow={this.props.loginShow}
                    width={this.props.width}
                />
                <Footer />
            </div>
        );
    }
}
