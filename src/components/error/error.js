import React, {Component} from 'react';
import Context from '../context';
import {getLanguageData} from '../other';

class Error extends Component {
    render() {
        const {languageData} = this.context;
        let language = getLanguageData(languageData);
    return (
        <>
            <img className="error-img" src={require('../../images/danger.svg')} alt="danger"/>
            <div className="error-message">{language.errorLanguage}</div>
        </>
    )
    }
}

Error.contextType = Context;

export default Error;