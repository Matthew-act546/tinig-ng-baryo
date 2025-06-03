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
        <div className="box-circle bg-primary text-center">

          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <div className='text-start w-100'>
              
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
              Sign up
            </button>
            </form>
</div>
    </div>
    </div>

    </>
  )
}
  
// <div className="loginSignup">
//         <div className="d-flex align-items-center flex-column justify-content-center vh-100">
//           <div className="box-circle bg-primary text-center">
//             <h6 className="text-white fw-medium pb-2">Maligayang araw po mula sa Tinig ng Baryo!</h6>
            
//             <button onClick={onGoogleSignIn} className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
//               Continue to Google
//             </button>
//             <Link to="/SignUp" className="btn-authenticating btn-authenticating-signup-continue mb-1 fw-medium text-decoration-none">
//               Continue to Facebook
//             </Link>
            
//             <div className='border my-3' style={{ width: '80%', height: '1px' }}></div>
//             <div className="d-flex align-items-center text-muted mb-3 text-white">
//               <span className="small fw-medium text-white">or continue with</span>
//             </div>
            // <div className="text-center mb-3">
            //   <div className='text-start w-100'>
            //     <form onSubmit={onSubmit}>
            //       <label className='text-white ms-3 text-start' htmlFor="email">Email Address</label>
            //       <br />
            //       <input type="email" onChange={(e) => setEmail(e.target.value)} className='inputs text-whites mb-2' id='email' placeholder='Email Address' />
            //       <br />
            //       <label className='text-white ms-3 text-start' htmlFor="password">Password</label>
            //       <br />
            //       <input type="password" onChange={(e) => setPassword(e.target.value)}  className='inputs text-whites' id='password' placeholder='Password' />
            //       </form>
            //   </div>
            // </div>
            // <button className="btn-authenticating btn-authenticating-signup mb-1 fw-medium text-decoration-none">
            //   Sign up
            // </button>

//             {/* <button onClick={logout} className='text-white'> Logout </button> */}

//             <p className='text-white fw-medium'>Don't have account? <a href="" className='text-secondary fw-medium'>Create here</a></p>
//           </div>
//         </div>
//       </div>


export default Login
