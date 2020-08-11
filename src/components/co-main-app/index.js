import React, {Component} from 'react';
import GetUsersService from '../../services/get-users-service';
import {usersLoaded} from '../../actions/index';
import {connect} from 'react-redux';
import TableContent from '../table-content';
import PreviewContent from '../preview-content';
import {Route, Switch} from 'react-router-dom';


const getUsersService = new GetUsersService();

class CoMainComponent extends Component {

    componentDidMount() {
        getUsersService.getUsers('/data')
        .then(res => this.props.usersLoaded(res));
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={TableContent}/>
                    <Route exact path="/preview/" component={PreviewContent}/>
                </Switch>
            </>
        )
    }
}

const mapDispatchToProps = {
    usersLoaded
};

export default connect(undefined, mapDispatchToProps) (CoMainComponent);