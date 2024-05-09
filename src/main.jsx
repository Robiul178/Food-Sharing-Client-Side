import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './Routes/Routes.jsx';
import Home from './Components/Pages/Home/Home/Home.jsx';
import Shop from './Components/Pages/Shop/Shop.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Registration from './Components/Pages/Registration/Registration.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registrstion",
        element: <Registration />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' overflow-x-hidden'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
