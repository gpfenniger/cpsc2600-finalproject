import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class LinkBar extends Component {
    render() {
        return (
            <div
                className="container linkBar"
                style={{ flex: 1, paddingTop: 35 }}
            >
                <h2>Related Links</h2>
                {this.props.sections ? (
                    this.props.sections.map(section => (
                        <div key={uuid()}>
                            <h4 key={uuid()}>{section.name}</h4>
                            {section.links.map(link => (
                                <p key={uuid()}>{link.name}</p>
                            ))}
                        </div>
                    ))
                ) : (
                    <h4>No Links</h4>
                )}
            </div>
        );
    }
}
