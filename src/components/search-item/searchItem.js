import React, {Component} from 'react';
import Context from '../context';

export default class SearchItem extends Component {

    updateSearch =(e) => {
        const term = e.target.value;
        this.props.onSearchUpdate(term);
    }

    render() {
        const {languageData} = this.context;
        let language = null;
        if (languageData.englishActive) {
            language = languageData.english;
        } else {
            language = languageData.russian;
        }
        return (
            <input className="search" placeholder={language.searchUser} type="text" onChange={this.updateSearch}/>
        )
    }
}

SearchItem.contextType = Context;