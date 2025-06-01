import About from "./components/About"
import Footer from "./components/Footer"
import HeroUnauthen from "./components/HeroUnauthen"
import HowToUse from "./components/HowToUse"
import NavbarUnauthen from "./components/NavbarUnauthen"

function App() {
  return (
    <>
      <NavbarUnauthen />
      <HeroUnauthen />
      <About />
      <HowToUse />
      <Footer />
    </>
  )
}

export default App
