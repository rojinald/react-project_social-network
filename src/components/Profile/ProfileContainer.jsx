import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId)
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default compose(connect(mapStateToProps, { getProfile }), withRouter, withAuthRedirect)(ProfileContainer);
