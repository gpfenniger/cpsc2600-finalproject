import React, { Component } from 'react';
import Header from '../main/Header';
import Content from '../main/Content';
import Footer from '../main/Footer';

export default class Desktop extends Component {
    render() {
        return (
            <div className="desktop">
                <Header
                    changePage={this.props.changePage}
                    handleLogin={this.props.handleLogin}
                    loginShow={this.props.loginShow}
                />
                <Content
                    page={this.props.page}
                    handleLogin={this.props.handleLogin}
                    changePage={this.props.changePage}
                    loginShow={this.props.loginShow}
                    width={this.props.width}
                />
                <Footer loginShow={this.props.loginShow} />
            </div>
        );
    }
}
