import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle} from '../../config/auth';
import React, { useState } from 'react';
import { useAuth } from '../context/authContext/index';

function Login() {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  console.log(useAuth?.currentUser?.email);

  const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
      e.preventDefault()
      if (!isSigningIn) {
        setIsSigningIn(true)
        doSignInWithGoogle().catch(err => {
          console.error(err);
          setIsSigningIn(false)
        })
      }
    }


  

  // const signIn = async() => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.error("Error signing in:", error);
  //   }
  // }

  // const signInWithGoogle = async() => {
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (error) {
  //     console.error("Error signing in with Google:", error);
  //   }
  // }

  // const logout = async() => {
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.error("Error signing in with Google:", error);
  //   }
  // }

  return (
    <>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <div className="loginSignup">
        <div className="d-flex align-items-center flex-column justify-content-center vh-100">
          <div className="box-circle bg-primary text-center">
            <h6 className="text-white fw-medium pb-2">Maligayang araw po mula sa Tinig ng Baryo!</h6>
            
            <button onClick={onGoogleSignIn} className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
              Continue to Google
            </button>
            <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
              Continue to Facebook
            </Link>
            
            <div className='border my-3' style={{ width: '80%', height: '1px' }}></div>
            <div className="d-flex align-items-center text-muted mb-3 text-white">
              <span className="small fw-medium text-white">or continue with</span>
            </div>
            <div className="text-center mb-3">
              <div className='text-start w-100'>
                <form onSubmit={onSubmit}>
                  <label className='text-white ms-3 text-start' htmlFor="email">Email Address</label>
                  <br />
                  <input type="email" onChange={(e) => setEmail(e.target.value)} className='inputs text-whites mb-2' id='email' placeholder='Email Address' />
                  <br />
                  <label className='text-white ms-3 text-start' htmlFor="password">Password</label>
                  <br />
                  <input type="password" onChange={(e) => setPassword(e.target.value)}  className='inputs text-whites' id='password' placeholder='Password' />
                  </form>
              </div>
            </div>
            <button className="btn-authenticating btn-authenticating-signup mb-1 fw-medium text-decoration-none">
              Sign up
            </button>

            {/* <button onClick={logout} className='text-white'> Logout </button> */}

            <p className='text-white fw-medium'>Don't have account? <a href="" className='text-secondary fw-medium'>Create here</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default Login
