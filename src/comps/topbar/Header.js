import React, { Component } from 'react';
import NavLink from './NavLink';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'The Viking Programmer',
            links: [
                {
                    value: 'blog',
                    href: '/api/article'
                },
                {
                    value: 'about me',
                    href: '/aboutme'
                }
            ]
        };
    }

    render() {
        return (
            <header>
                <h2>{this.state.title}</h2>
                <ul>
                    {this.state.links.map(link => {
                        return (
                            <NavLink
                                key={link.href}
                                link={link}
                                changePage={this.props.changePage}
                            />
                        );
                    })}
                </ul>
                <a
                    onClick={this.props.handleLogin}
                    href="/"
                    style={{ alignSelf: 'right', marginRight: 40 }}
                >
                    login
                </a>
            </header>
        );
    }
}
