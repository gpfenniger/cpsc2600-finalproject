import React, { Component } from 'react';

export default class FloatingPanel extends Component {
    render() {
        let style = {
            display: this.props.show ? 'block' : 'none'
        };

        return (
            <div style={style} className="container floating">
                {this.props.children}
            </div>
        );
    }
}
