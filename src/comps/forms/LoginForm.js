import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            loginkey: undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginCheck = this.loginCheck.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post('/login', {
                username: event.target[0].value,
                password: event.target[1].value
            })
            .then(res => {
                this.setState({ loginkey: res.data.key });
            });
    }

    loginCheck(event) {
        event.preventDefault();
        axios.post('/admin', { loginkey: this.state.loginkey }).then(res => {
            alert(res.data);
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" />
                    <input type="password" />
                    <button type="submit">Login</button>
                </form>
                <form onSubmit={this.loginCheck}>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}
