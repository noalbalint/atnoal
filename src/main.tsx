import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Velofood from './pages/Velofood'
import './index.css'
import './tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>404 - That page doesn't exist</p>,
  },
  {
    path: "/velofood",
    element: <Velofood />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
