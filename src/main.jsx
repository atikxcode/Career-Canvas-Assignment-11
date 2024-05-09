import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import NavBar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/navbar',
        element: <NavBar></NavBar>
      },
      {
        path: '/footer',
        element: <Footer></Footer>,
      },
      {
        path: '/',
        element: <Home></Home>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
