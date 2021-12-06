
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className="app-wrapper" >
      <Header />
      <Navbar store={props.store} />
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile store={props.store} />} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        <Route path='/users' render={() => <UsersContainer store={props.store} />} />
        {/* <Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} /> */}
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
