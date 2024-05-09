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
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllJobs from './Pages/AllJobs/AllJobs'
import AppliedJobs from './Pages/ApplierJobs/ApplierJobs'
import AddJobs from './Pages/AddJobs/AddJobs'
import MyJobs from './Pages/MyJobs/MyJobs'
import Blogs from './Pages/Blogs/Blogs'

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
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/addjob',
        element: <AddJobs></AddJobs>,
      },
      {
        path: '/myjobs',
        element: <MyJobs></MyJobs>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
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
