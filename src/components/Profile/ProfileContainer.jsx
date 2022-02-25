import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';


const ProfileContainer = (props) => {
    let userId = props.match.params.userId;

    useEffect(() => {
        if (!userId) {
            userId = props.authUserId;
            if (!userId) { props.history.push('/login') }
        }
        props.getProfile(userId);
        props.getStatus(userId)

    }, [userId])

    return <Profile
        {...props}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={!props.match.params.userId}
        savePhoto={props.savePhoto}
    />
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }), withRouter)(ProfileContainer);
