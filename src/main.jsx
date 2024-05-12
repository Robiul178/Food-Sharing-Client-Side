import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Routes from './Routes/Routes.jsx';
import Home from './Components/Pages/Home/Home/Home.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Registration from './Components/Pages/Registration/Registration.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import AvailableFoods from './Components/Pages/AvailableFoods/AvailableFoods.jsx';
import AddFood from './Components/Pages/AddFood/AddFood.jsx';
import ManageMyFoods from './Components/Pages/ManageMyFoods/ManageMyFoods.jsx';
import MyFoodRequest from './Components/Pages/MyFoodRequest/MyFoodRequest.jsx';
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import ViewDetails from './Components/Pages/ViewDetails/ViewDetails.jsx';
import Update from './Components/Pages/ManageMyFoods/MyFoodCard/Update/Update.jsx';
// import App from './App.jsx';



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
        path: "/avaliableFood",
        element: <AvailableFoods />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registrstion",
        element: <Registration />
      },
      {
        path: '/addFood',
        element: <PrivateRoute>
          <AddFood />
        </PrivateRoute>
      },
      {
        path: '/manageMyfood',
        element: <PrivateRoute>
          <ManageMyFoods />
        </PrivateRoute>
      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest />
      },
      {
        path: '/foods/:id',
        element: <PrivateRoute>
          <ViewDetails />
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:1000/foods/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`http://localhost:1000/foods/${params.id}`)
      },
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
