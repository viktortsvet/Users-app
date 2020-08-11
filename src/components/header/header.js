import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByName, 
    sortByAge, 
    sortById, 
    sortByAsсDec, 
    userFilter} from '../../actions/index';
import {Link} from 'react-router-dom';
import Context from '../context';
import SearchItem from '../search-item';
import {getLanguageData} from '../other';


class Header extends Component {

    render() {
        const {languageData, switchLanguage} = this.context;
        let language = getLanguageData(languageData);
        return (
            <>
                <div className="header">
                    <div className="id-name-age">
                        <button className="btnId" onClick={() => this.props.sortById()}>{language.btnId}</button>
                        <button className="btnName" onClick={() => this.props.sortByName()}>{language.btnName}</button>
                        <button className="btnAge" onClick={() => this.props.sortByAge()}>{language.btnAge}</button>
                        <button className="btnAscDec" onClick={() => this.props.sortByAsсDec()}>{language.btnAsc}</button>
                    </div>
                    <div className="table-preview">
                        <Link to="/"><button className="btnTable">{language.table}</button></Link>
                        <Link to="/preview/"><button className="btnPreview">{language.preview}</button></Link>
                        
                    </div>             
                </div>
                <button className="btnSwitchLang" onClick={() => switchLanguage()}>{language.switchLanguage}</button>
                <SearchItem onSearchUpdate={this.props.userFilter}/>  
            </>
        )
    }
}

Header.contextType = Context;


const mapDispatchToProps = {
    sortByName,
    sortByAge,
    sortById,
    sortByAsсDec,
    userFilter
};

export default connect(undefined, mapDispatchToProps) (Header);