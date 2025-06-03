import About from "./components/About"
import Footer from "./components/Footer"
import HeroUnauthen from "./components/HeroUnauthen"
import HowToUse from "./components/HowToUse"
import NavbarUnauthen from "./components/NavbarUnauthen"
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../config/firebase"; 
import AuthenticatedLogged from "./AuthenticatedLogged";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    return (
      <>
        <AuthenticatedLogged />
      </>
    );
  }

  return (
    <>
      <NavbarUnauthen />
      <HeroUnauthen />
      <About />
      <HowToUse />
      <Footer />
    </>
  );
}

export default App
