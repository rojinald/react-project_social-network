import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';
import { getAuthData } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    getAuthData().then(data => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)