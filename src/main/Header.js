import React, { Component } from 'react';
import NavLink from '../components/header/NavLink';
import { getPages } from '../services/Services';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Final Project',
            links: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        getPages()
            .then(pages => {
                pages.push({
                    value: 'Blog',
                    href: '/api/article'
                });
                this.setState({ links: pages });
            })
            .catch(err => console.log(err));
    }

    handleClick(event) {
        event.preventDefault();
        this.props.changePage('/api/page/home');
    }

    render() {
        return (
            <header
                style={{ filter: this.props.loginShow ? 'blur(5px)' : 'none' }}
            >
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
                    style={{
                        alignSelf: 'right',
                        marginRight: 40,
                        display: this.props.mobile ? 'none' : 'block'
                    }}
                >
                    login
                </a>
            </header>
        );
    }
}
