import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class FloatingLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        let style = {
            position: 'fixed',
            left: this.state.width / 4,
            width: '50%',
            top: 150,
            backgroundColor: '#2e3440',
            padding: 25,
            borderRadius: 5,
            display: this.props.show ? 'block' : 'none'
        };

        return (
            <div style={style} className="container">
                <LoginForm changeKey={this.props.changeKey} />
            </div>
        );
    }
}
