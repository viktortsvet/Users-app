import React, {Component} from 'react';
import Video from '../video-component/video';

export default class UserItem extends Component {
    
    render() {
        const {user, onToggleFavourite, nameOfClass, language, phrase, video} = this.props;
        return (
            <>
                <img src={require('../../images/' + user.image + '.svg')} alt="animal"/>
                <div className="userText">{user.name} <br></br> {user.age} {language.years} <br></br> {user.phone}</div>
                <div className="userPhrase">{phrase ? user.phrase : null}</div>
                <i onClick={() => onToggleFavourite(user.id)} className={nameOfClass}></i>
                <div className="userVideo">{
                    video ? user.video ? <Video
                    data={user.video}/> : null : null 
                }</div>
            </>
        )
    }
}