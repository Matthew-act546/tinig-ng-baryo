import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/AuthenticatedLogged"; 
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>

    <div className="loginSignup">
      <div className="d-flex align-items-center flex-column justify-content-center vh-100">
        <div className="box-circles bg-primary text-center">

          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <div className='text-start w-100'>
                  <h4 className="display-6 fw-medium text-white text-center">Log in</h4>
                  <label className='text-white ms-3 text-start' htmlFor="email">Email Address</label>
                  <br />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputs text-whites mb-2' id='email' placeholder='Email Address' />
                  <br />
                  <label className='text-white ms-3 text-start' htmlFor="password">Password</label>
                  <br />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className='inputs text-whites' id='password' placeholder='Password' />
                
              </div>
            </div>
            <button type="submit" className="btn-authenticating btn-authenticating-signup mb-1 fw-medium text-decoration-none">
              Log in
            </button>
            </form>
</div>
    </div>
    </div>

    </>
  )
}

export default Login
