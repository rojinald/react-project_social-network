import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import UsersApiContainer from './UsersApiContainer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress })(UsersApiContainer);

export default UsersContainer;