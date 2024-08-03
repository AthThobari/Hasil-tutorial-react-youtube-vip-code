import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './assets/pages/login.jsx'
import ErrorPage from './assets/pages/404.jsx'
import RegisterPage from './assets/pages/register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "register",
    element: <RegisterPage></RegisterPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
