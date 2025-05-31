import About from "./components/About"
import HeroUnauthen from "./components/HeroUnauthen"
import NavbarUnauthen from "./components/NavbarUnauthen"
import TopShadow from "./components/TopShadow"
import './styles/index.css'

function App() {
  return (
    <>
      <TopShadow />
      <NavbarUnauthen />
      <HeroUnauthen />
      <About />
    </>
  )
}

export default App
