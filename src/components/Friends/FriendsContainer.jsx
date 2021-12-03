import { connect } from 'react-redux';
import Friends from './Friends';


const mapStateToProps = (state) => {
    return {
        friendsSideBar: state.friendsSideBar,
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;