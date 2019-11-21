import React, { Component } from 'react';

export default class AdminToolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <p>Admin Tools</p>
                <input type="button" value="edit" />
                <input type="button" value="new" />
            </div>
        );
    }
}
