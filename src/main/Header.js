import React, { Component } from 'react';
import NavLink from '../components/header/NavLink';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Final Project',
            links: [
                {
                    value: 'blog',
                    href: '/api/article'
                },
                {
                    value: 'about me',
                    href: '/api/page/about_me'
                }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.changePage({
            title: 'Homepage',
            link: '/api/page/home'
        });
    }

    render() {
        return (
            <header>
                <h2>
                    <a href="/" onClick={this.handleClick}>
                        {this.state.title}
                    </a>
                </h2>
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
