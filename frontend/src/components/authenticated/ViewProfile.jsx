import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import NavbarAuthen from "./NavbarAuthen";
import React, { useEffect, useState } from "react";


function ViewProfile() {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
  
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      });
    };
    useEffect(() => {
      fetchUserData();
    }, []);

    async function handleLogout() {
        try {
          await auth.signOut();
          window.location.href = "/";
          console.log("User logged out successfully!");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      }

  return (
    <>
    <NavbarAuthen />
    <div style={{ marginTop: "100px", padding: "20px" }}>
      <h1>View Profile</h1>
      <p>This is the view profile page where users can see their profile details.</p>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div>
            <p>Email: {userDetails.email} <br /> Full name: {userDetails.firstName} {userDetails.lastName}</p>
          </div>

          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading... kapeng mainit. mainit na mainit</p>
      )}
    </div>
    </>
  )
}

export default ViewProfile
