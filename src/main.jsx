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
import Error from './Components/Error/Error.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    errorElement: <Error />,
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
        </PrivateRoute>,
        loader: () => fetch('https://server-wine-ten.vercel.app/foods?status=available')
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
        loader: ({ params }) => fetch(`https://server-wine-ten.vercel.app/foods/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`https://server-wine-ten.vercel.app/foods/${params.id}`)
      },
    ]
  },
]);


// Create a client
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' overflow-x-hidden'>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
