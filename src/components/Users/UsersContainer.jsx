import { connect } from 'react-redux';
import { getUsers, pageChange, subscriptionUnfollow, subscriptionFollow } from '../../redux/users-reducer';
import { getPageSizeSelector, getTotalUsersCountSelector, getIsFetchingSelector, getFollowingInProgressSelector, getCurrentPageSelector, getUsersSuperSelector } from '../../redux/users-selectors';
import UsersApiContainer from './UsersApiContainer';

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),

    }
};


const UsersContainer = connect(mapStateToProps, {
    getUsers, pageChange, subscriptionUnfollow, subscriptionFollow
})(UsersApiContainer);

export default UsersContainer;