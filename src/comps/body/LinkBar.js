import React, { Component } from 'react';
import colours from '../../../constants/colours';

export default class LinkBar extends Component {
    render() {
        return (
            <div className="container linkBar" style={{ flex: 1 }}>
                <h3 style={{ color: '#d8dee9' }}>Links</h3>
            </div>
        );
    }
}
