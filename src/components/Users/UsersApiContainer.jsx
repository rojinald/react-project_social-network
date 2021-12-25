import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';



class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    subscriptionUnfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId} `, { withCredentials: true, headers: { "API-KEY": "ab73fc98-562a-4a12-b515-e46758dbe317" } })
            .then(response => {
                if (response.data.resultCode == 0) {
                    this.props.unfollow(userId)
                }
            })
    }

    subscriptionFollow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId} `, {}, { withCredentials: true, headers: { "API-KEY": "ab73fc98-562a-4a12-b515-e46758dbe317" } })
            .then(response => {
                if (response.data.resultCode == 0) {
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