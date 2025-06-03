import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import App from './App.jsx'
import './styles/main.scss';
import LoginSignup from './pages/LoginSignup.jsx';
import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Signup from './pages/Singup.jsx';
import HomeAuthen from './components/authenticated/HomeAuthen.jsx';
import { ToastContainer } from "react-toastify";
import ViewProfile from './components/authenticated/ViewProfile.jsx';
import AuthenticatedLogged from "./AuthenticatedLogged";
import BaryoJoined from './components/authenticated/BaryoJoined.jsx';
import ProtectedRoute from './components/ProtectedRoute';



const router = createBrowserRouter([
 

  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound/>,
  },
  {
    path: '/LoginSignUp',
    element: <LoginSignup />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/SignUp',
    element: <Signup />,
  },
  {
    path: '/ViewProfile',
    element: (
        <ProtectedRoute>
          <ViewProfile />
        </ProtectedRoute>
      ),
  },
  {
    path: '/AuthenticatedLogged',
    element: (
      <ProtectedRoute>
        <AuthenticatedLogged />
      </ProtectedRoute>
    ),
  },
  {
    path: '/baryo/:id',
    element: (
      <ProtectedRoute>
        <BaryoJoined />
      </ProtectedRoute>
    ),
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
</StrictMode>
)
