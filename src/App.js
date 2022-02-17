import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';


const App = (props) => {
  useEffect(() => {
    props.initializeApp()
  })

  if (!props.initialized) {

    return <Preloader />
  }
  return (
    <div className="app-wrapper" >
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        {/* <Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} /> */}
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
