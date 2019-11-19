import React, { Component } from 'react';

export default class FloatingPanel extends Component {
    render() {
        let style = {
            position: 'fixed',
            left: this.props.width / 4,
            width: '50%',
            top: 150,
            backgroundColor: '#2e3440',
            padding: 25,
            borderRadius: 5,
            display: this.props.show ? 'block' : 'none'
        };

        return (
            <div style={style} className="container">
                {this.props.children}
            </div>
        );
    }
}
