import HomeAuthen from './components/authenticated/HomeAuthen.jsx';
import NavbarAuthen from './components/authenticated/NavbarAuthen.jsx';
import ViewProfile from './components/authenticated/ViewProfile.jsx';

function AuthenticatedLogged() {
  return (
    <>
      <NavbarAuthen />
      <HomeAuthen />

    </>
  )
}

export default AuthenticatedLogged