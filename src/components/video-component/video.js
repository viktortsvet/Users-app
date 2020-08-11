import React, {Component} from 'react';
import {Player} from 'video-react';
import 'video-react/dist/video-react.css';

export default class Video extends Component {
    render() {
        const {data} = this.props;
        return (
            <Player>
                <source src={require('../../videos/' + data + '.mp4')}/>
            </Player>
        )
    }
}