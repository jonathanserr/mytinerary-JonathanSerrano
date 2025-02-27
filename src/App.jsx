
import './App.css'

// importo rutas y layouts
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from './layouts/NotFound';
import Home from './pages/Home';
import Cities from './pages/Cities';
import FirstLayout from './layouts/FirstLayout';
import CitiesLayout from './layouts/CitiesLayout';
import User from './pages/User';

// se crean rutas y se le asigna un layout a cada una
const router = createBrowserRouter([ 
  {
    element: <FirstLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Navigate to="/" replace /> },
      { path: "/User", element: <User /> },
    ],
  },
  {
    element: <CitiesLayout />,
    children: [
      { path: "/Cities", element: <Cities /> },
    ],
  },
  {
    path: "/*", 
    element: <NotFound />,
  },
]);
function App() {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
    // aca se renderiza el router
  )
}

export default App
