import { Navbar, Container, Button } from 'react-bootstrap'
import { authActions } from '../../store/authSlice';
import { useDispatch  } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(authActions.logout())
    history.push('/')
  }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Welcome To Your Mail Box</Navbar.Brand>
          <Button style={{background:'teal'}} onClick={logoutHandler}>Logout</Button>
        </Container>
      </Navbar>
    )
};
export default Home;