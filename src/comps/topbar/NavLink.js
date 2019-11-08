import React, { Component } from 'react';

export default class NavLink extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.changePage({
            title: event.target.innerHTML,
            link: event.target.href,
            linktype: event.target.attributes['linktype'].nodeValue
        });
    }

    render() {
        return (
            <li>
                <a
                    href={this.props.link.href}
                    onClick={this.handleClick}
                    linktype={this.props.linktype}
                >
                    {this.props.link.value}
                </a>
            </li>
        );
    }
}
