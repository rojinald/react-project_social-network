import React from 'react';
import { userAPI } from '../../api/api';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';



class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getChangePage(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    subscriptionUnfollow = (userId) => {
        userAPI.deleteSubscription(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
            })
    }

    subscriptionFollow = (userId) => {
        userAPI.postSubscription(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    this.props.follow(userId)
                }
            })
    }
    render() {
        return <>
            <span>{this.props.isFetching ? <Preloader /> : null}</span>
            <Users {...this.props} onPageChanged={this.onPageChanged}
                subscriptionUnfollow={this.subscriptionUnfollow}
                subscriptionFollow={this.subscriptionFollow}
            />
        </>
    }
}


export default UsersApiContainer;