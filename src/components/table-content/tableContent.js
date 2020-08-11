import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addOrDeleteFavourite} from '../../actions/';
import Spinner from '../spinner';
import Context from '../context';
import UserList from '../user-list';
import {searchFilter, getLanguageData} from '../other';


class TableContent extends Component {


    onToggleFavourite = (id) => {
        this.props.addOrDeleteFavourite(id);
    }
    render() {

        const {languageData} = this.context;
        
        const {users, loading, userFilterValue} = this.props;    
        const visibleUsers = searchFilter(users, userFilterValue);
        if (loading) {
            return (
                <Spinner/>
            )
        }
        return (
            <> 
                <UserList onToggleFavourite={this.onToggleFavourite} 
                data={visibleUsers} 
                language={getLanguageData(languageData)}/>
            </>
        )
    }
}

TableContent.contextType = Context;

const mapStateToProps = (state) => {
    return {
        users: state.users,
        loading: state.loading,
        userFilterValue: state.userFilterValue
    }
}

const mapDispatchToProps = {
    addOrDeleteFavourite
};

export default connect(mapStateToProps, mapDispatchToProps) (TableContent);