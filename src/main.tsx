import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404 - That page doesn't exist</p>,
  },
  {
    path: "/hire",
    element: <p>plz hire me jonathan</p>,
  },
  {
    path: "/hire/velofood",
    element: <p>Velofood resume</p>,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
