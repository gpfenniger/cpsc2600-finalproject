import React, { Component } from 'react';
import NavLink from './NavLink';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    value: 'Blog',
                    href: '/api/article'
                },
                {
                    value: 'About Me',
                    href: '/aboutme'
                }
            ]
        };
    }

    render() {
        return (
            <header>
                <h2>Project Deepsky</h2>
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
            </header>
        );
    }
}
