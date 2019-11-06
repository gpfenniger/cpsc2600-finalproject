import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: ['Link 1', 'Link 2', 'Link 3']
        };
    }

    render() {
        return (
            <header>
                <h1>Title</h1>
                <ul>
                    {this.state.links.map(link => {
                        return <li key={link}>{link}</li>;
                    })}
                </ul>
            </header>
        );
    }
}
