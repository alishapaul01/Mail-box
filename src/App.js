import SignUp from './components/SignUp/SignUp';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Switch>
    <Route path='/' exact>
    <SignUp/>
    </Route>
    <Route path='/login'>
    <Login/>
    </Route>
    <Route path='/home'>
    <Home/>
    </Route>
    </Switch>
    </>
  )
}

export default App;
