import React, {Component} from 'react';
import Header from '../header';
import CoMainComponent from '../co-main-app';
import ErrorBoundary from '../error-boundary';
import Context from '../context';

import '../../styles/style.scss';


export default class App extends Component {

    state = {
        english: {
            btnId: 'ID',
            btnName: 'Name',
            btnAge: 'Age',
            btnAsc: 'By asc/dec',
            table: 'Table',
            preview: 'Preview',
            switchLanguage: 'Switch to russian/english',
            favouriteLen: 'Quantity of favourite users: ',
            searchUser: "Users' search...",
            years: 'years',
            errorLanguage: 'Something went wrong!'
        },
        russian: {
            btnId: 'Айди',
            btnName: 'Имя',
            btnAge: 'Возраст',
            btnAsc: 'По возрастанию/убыванию',
            table: 'Таблица',
            preview: 'Превью',
            switchLanguage: 'Переключить русский/английский язык',
            favouriteLen: 'Количество избранных пользователей: ',
            searchUser: 'Поиск пользователей...',
            years: 'лет',
            errorLanguage: 'Что-то пошло не так!'
        },
        englishActive: true
    };

    switchLanguage = () => {
        this.setState(state => ({
            englishActive: !state.englishActive
        }));
    }
    
    render() {
        return (
            <>
                <div>
                    <div className="container">
                        <Context.Provider value={
                            {
                                languageData: this.state,
                                switchLanguage: this.switchLanguage
                            }
                        }>
                            <Header/>
                            <ErrorBoundary>
                                <CoMainComponent/>
                            </ErrorBoundary>
                        </Context.Provider>
                    </div>
                </div>
            </>
        )
    }
}

