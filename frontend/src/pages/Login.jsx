import { Link } from 'react-router-dom';


function Login() {
  return (
    <>
      <div className="loginSignup">
        <div className="d-flex align-items-center flex-column justify-content-center vh-100">
          <div className="box-circle bg-primary text-center">
            <h6 className="text-white fw-medium pb-2">Maligayang araw po mula sa Tinig ng Baryo!</h6>
            
            <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
              Continue to Google
            </Link>
            <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
              Continue to Facebook
            </Link>
            
            <div className='border my-3' style={{ width: '80%', height: '1px' }}></div>
            <div className="d-flex align-items-center text-muted mb-3 text-white">
              <span className="small fw-medium text-white">or continue with</span>
            </div>
            <div className="text-center mb-3">
              <div className='text-start w-100'>
                <label className='text-white ms-3 text-start' htmlFor="email">Email Address</label>
                <br />
                <input type="email" className='inputs text-whites mb-2' id='email' placeholder='Email Address' />
                <br />
                <label className='text-white ms-3 text-start' htmlFor="password">Password</label>
                <br />
                <input type="password" className='inputs text-whites' id='password' placeholder='Password' />
              </div>
            </div>
            <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup mb-1 fw-medium text-decoration-none">
              Sign up
            </Link>

            <p className='text-white fw-medium'>Don't have account? <a href="" className='text-secondary fw-medium'>Create here</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
