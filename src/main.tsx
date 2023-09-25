import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Velofood from './pages/Velofood'
import DrawLine from './components/DrawLine'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import './index.css'
import './tailwind.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>404 - That page doesn't exist</p>,
  },
  {
    path: "/scrolltest",
    element: <DrawLine />
  },
  {
    path: "/velofood",
    element: <Velofood />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='1, 173, 76'
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
