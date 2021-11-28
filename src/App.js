
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper" >
        <Header />
        <Navbar state={props.state.friendsSideBar} />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          {/* <Route path='/friends' render={() => <Friends state={props.state.friendsPage} />} /> */}
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
