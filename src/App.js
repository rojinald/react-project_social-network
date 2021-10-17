
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className = "app-wrapper" >
      <Header/>
      <Navbar/>
      {/*<Profile/>*/}
      <div className = "app-wrapper-content">
      <Dialogs/>
      </div>
     </div>


  );
};

export default App;
