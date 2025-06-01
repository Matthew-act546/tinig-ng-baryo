import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './styles/main.scss';
import LoginSignup from './pages/LoginSignup.jsx';
import Login from './pages/Login.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Signup from './pages/Singup.jsx';
import { AuthProvider } from './context/authContext/index.jsx'

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
  // {
  //   path: '/ProfilePage/:ProfileId',
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</StrictMode>
)
