import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addOrDeleteFavourite} from '../../actions/index';
import Context from '../context';
import UserList from '../user-list';
import {searchFilter, getLanguageData} from '../other';


class PreviewContent extends Component {

    onToggleFavourite = (id) => {
        this.props.addOrDeleteFavourite(id);
    }
    render() {

        const {languageData} = this.context;
        
        const {users, userFilterValue} = this.props;
        const visibleUsers = searchFilter(users, userFilterValue);
        return (
            <>
                <UserList onToggleFavourite={this.onToggleFavourite} 
                    data={visibleUsers} 
                    language={getLanguageData(languageData)}
                    video
                    phrase/> 
            </>
        )
    }
}

PreviewContent.contextType = Context;

const mapStateToProps = (state) => {
    return {
        users: state.users,
        userFilterValue: state.userFilterValue
    }
}

const mapDispatchToProps = {
    addOrDeleteFavourite
};

export default connect(mapStateToProps, mapDispatchToProps) (PreviewContent);