import SignUp from './components/SignUp/SignUp';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login'
import { sendMail, receivedMail } from './store/mail-actions'
import { useSelector,useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import MailEditor from './components/Mail/MailEditor';
let isInitial = true;
function App(){

  const dispatch = useDispatch();
  const mails = useSelector(state => state.mail)
  const isLogin = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(receivedMail())
  },[dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendMail(mails))

  },[mails,dispatch])
  return (
    <>
    <Fragment>
   <Switch>
    <Route path='/' exact>
      <SignUp/>
    </Route>
    <Route path='/login'>
      <Login />
    </Route>
    {isLogin && <MainLayout> 
  <Route path='/edit'>
    <MailEditor/>
  </Route>
  </MainLayout> }
   </Switch>
   </Fragment>
    </>
  )
}

export default App;
