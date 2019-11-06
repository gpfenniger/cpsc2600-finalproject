import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Homepage',
            content: []
        };
    }

    render() {
        return (
            <div className="container content" style={{ flex: 4 }}>
                <h2>{this.state.title}</h2>
            </div>
        );
    }
}
