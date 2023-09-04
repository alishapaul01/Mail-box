import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import classes from './SignUp.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const SignUp=()=>{
    const emailInputRef= useRef('');
    const passwordInputRef= useRef('');
    const confirmPasswordInputRef = useRef();

    const submitHandler =async (event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;
        
    if(enteredPassword !== enteredConfirmPassword){
        alert('Password does not match')
        confirmPasswordInputRef.current.value = '';
    } 
    else{
      
            let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoJN_rVr0Lc1JqJC3gN9mIP1BscIC_kVU'
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
            }).catch((err) => {
                alert(err.message);
            })
        }
    }
    
    return (
        <>
        <section className={classes.signup}>
            <h2> Sign Up</h2>
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
        <div className={classes.control}>
              <label htmlFor='Cpassword'>Confirm Password</label>
              <input
                type='password'
                id='Cpassword'
                ref={confirmPasswordInputRef}
                required
              />
        </div>
        <div className={classes.actions}>
        <Button variant="primary" type='submit'>Sign Up</Button>
        </div>
        </form>
        </section>
        <div className={classes.login}>
        <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>
        </>
    )
}

export default SignUp;