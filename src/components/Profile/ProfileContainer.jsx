import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserProfile(userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);