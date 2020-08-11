import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundary extends Component {

    state = {
        error: false
    };

    componentDidCatch(error, info) {
        console.log('error: ', error);
        console.log('info: ', info);
        this.setState({error: true});
    }

    render() {
        if (this.state.error) {
            return (
                <Error/>
            )
        }
        return this.props.children;
    }
}