import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class AdminToolbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.adminAction(event.target.value);
    }

    render() {
        let buttons = ['new'];
        if (this.props.article) buttons.push('edit');

        return (
            <div className="toolbar">
                <p>Admin Tools</p>
                {buttons.map(button => (
                    <input
                        type="button"
                        onClick={this.handleClick}
                        value={button}
                        key={uuid()}
                    />
                ))}
            </div>
        );
    }
}
