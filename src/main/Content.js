import React, { Component } from 'react';
import ResultView from '../components/body/ResultView';
import SearchView from '../components/body/SearchView';
import AdminToolbar from '../components/body/AdminToolbar';
import LinkBar from './LinkBar';
import FloatingPanel from '../components/FloatingPanel';
import LoginForm from '../components/forms/LoginForm';
import { getLink, logout } from '../services/Services';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: <></>,
            key: undefined
        };
        this.changeKey = this.changeKey.bind(this);
    }

    componentDidMount() {
        getLink(this.props.page)
            .then(result =>
                this.setState({ view: <ResultView info={result.data} /> })
            )
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.page != this.props.page) {
            getLink(this.props.page)
                .then(result => {
                    let view;
                    if (Array.isArray(result.data))
                        view = <SearchView info={result.data} />;
                    else view = <ResultView info={result.data} />;
                    this.setState({ view: view });
                })
                .catch(err => console.log(err));
        }
    }

    componentWillUnmount() {
        logout(this.state.key);
    }

    changeKey(key) {
        this.setState({ key: key });
    }

    render() {
        return (
            <>
                <div
                    style={{
                        filter: this.props.loginShow ? 'blur(5px)' : 'none'
                    }}
                >
                    <main>
                        {this.state.view}
                        <LinkBar />
                    </main>
                    {this.state.key != undefined ? <AdminToolbar /> : <></>}
                </div>
                <FloatingPanel
                    width={this.props.width}
                    show={this.props.loginShow}
                >
                    <LoginForm
                        handleLogin={this.props.handleLogin}
                        changeKey={this.changeKey}
                    />
                </FloatingPanel>
            </>
        );
    }
}
