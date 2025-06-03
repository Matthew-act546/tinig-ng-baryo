import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          photoUrl:"",
          firstName: fname,
          lastName: lname,
          isLeader: false,
          isAdmin: false,
          isVerified: false,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <form onSubmit={handleRegister}>
      <div className="loginSignup">
        <div className="d-flex align-items-center flex-column justify-content-center vh-100">
          <div className="box-circle bg-primary text-center">
            <h6 className="text-white fw-medium pb-2">Maligayang araw po mula sa Tinig ng Baryo!</h6>
            
            <div className='border my-3' style={{ width: '80%', height: '1px' }}></div>
         
            <div className="text-center mb-3">
              <div className='text-start w-100'>

                 <label className='text-white ms-3 text-start' htmlFor="email"   required>Email Address</label>
                <br />
                <input type="email" className='inputs text-whites mb-2' id='email'onChange={(e) => setEmail(e.target.value)}  placeholder='Email Address' />
                <br />
                
                <label className='text-white ms-3 text-start' htmlFor="fname" required>First Name</label>
                <br />
                <input type="text" className='inputs text-whites mb-2' id='fname'onChange={(e) => setFname(e.target.value)}  placeholder='First Name' />

                <label className='text-white ms-3 text-start' htmlFor="lname" required>Last Name</label>
                <br />
                <input type="text" className='inputs text-whites mb-2' id='lname' onChange={(e) => setLname(e.target.value)} placeholder='Last Name' />
               
                
                <br />
                <label className='text-white ms-3 text-start' htmlFor="password"  required>Password</label>
                <br />
                <input type="password" className='inputs text-whites' id='password'  onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              </div>
              <button type="submit" className="btn btn-secondary mt-4">
                Sign Up
              </button>
            </div>


            <p className='text-white fw-medium'>Already have account? <Link to='/Login' className='text-white'>Log in here</Link></p>
          </div>
        </div>
      </div>

      </form>
    </>
  )
}

export default Signup
