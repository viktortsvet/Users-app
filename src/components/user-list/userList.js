import React, {Component} from 'react';
import UserItem from '../user-item';
import ScrollAnimation from 'react-animate-on-scroll';

export default class UserList extends Component {

    render() {
        const {data, language, onToggleFavourite, video, phrase} = this.props;
        let nameOfClass = 'fa fa-star';
        const users = data.map((user, index) => {
            if (user.favourite) {
                nameOfClass += ' favourite';
            } else {
                nameOfClass = 'fa fa-star';
            }
            return (
                <ScrollAnimation animateOnce animatePreScroll={true} key={index} animateIn='fadeInDown'>
                    <li className='tableItem' key={index}>
                        <UserItem  user={user} 
                        onToggleFavourite={onToggleFavourite}
                        nameOfClass={nameOfClass}
                        language={language}
                        video={video}
                        phrase={phrase}
                        />
                    </li>
                </ScrollAnimation>
            )      
        });
        return (
            <ul className="listOfUsers">{users}</ul>
        )     
    }
}