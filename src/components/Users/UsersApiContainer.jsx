import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';



class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    render() {
        return <>
            <span>{this.props.isFetching ? <Preloader /> : null}</span>
            <Users {...this.props}
            />
        </>
    }
}


export default UsersApiContainer;