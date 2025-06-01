import { Link } from 'react-router-dom';

function LoginSignup() {
  return (
    <>
      <div className="loginSignup">
        <div className="d-flex align-items-center  flex-column justify-content-center vh-100">
          <div className="circle text-center">
            <h4 className="text-white fw-medium pb-2"> Tinig ng baryo</h4>
            
            <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup mb-1 fw-medium text-decoration-none">
              Sign Up
            </Link>
            <Link to="/Login" className="btn-authenticating btn-authenticating-login fw-medium text-decoration-none ">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSignup
