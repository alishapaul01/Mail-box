import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import classes from './Login.module.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
const Login=()=>{ 

    const history= useHistory();
    const emailInputRef= useRef('');
    const passwordInputRef= useRef('');

    const submitHandler =async (event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        
      
            let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoJN_rVr0Lc1JqJC3gN9mIP1BscIC_kVU'
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Authenticatiion failed";
                        throw new Error(errorMessage)
                    })
                }
            }).then((data) => {
                console.log(data.idToken, enteredEmail);
                history.replace('/home');
            }).catch((err) => {
                alert(err.message);
            })
        
    }
    
    return (
        <>
        <section className={classes.login}>
            <h2> Login </h2>
            <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input 
          type='email' 
          id='email' 
          ref={emailInputRef} 
          required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
        <Button variant="primary" type='submit'>Login</Button>
        </div>
        </form>
        </section>
        <div className={classes.signup}>
        <p>Don't Have an account? 
            <Link to='/'>Sign Up</Link>
        </p>
        </div>
        </>
    )
}


export default Login;