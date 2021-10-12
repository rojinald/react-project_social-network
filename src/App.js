
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className = "app-wrapper" >
      <Header/>
      <Navigation/>
      <Profile/>
      <MyPosts />
     </div>


  );
};

export default App;
