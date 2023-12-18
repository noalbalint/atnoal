import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { velofood, capito, parkside, grazGeneral } from './coverLetters';
import './index.css'
import './tailwind.css'
import Home from './pages/Home'
import Hannah from './pages/Hannah'
import Resume from './pages/Resume'
import Error404 from './pages/Error404';
import SendEmail from './pages/SendEmail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: < Error404 />,
  },
  {
    path: "/hannah",
    element: <Hannah />,
  },
  {
    path: "/send-email",
    element: <SendEmail />,
  },
  {
    path: "/velofood",
    element: <Resume
      companyName='Velofood'
      coverLetter={velofood}
      accentColor='#01AD4C'
    />,
  },
  {
    path: "/capito",
    element: <Resume
      companyName='Capito'
      coverLetter={capito}
      accentColor='#C00000'
    />,
  },
  {
    path: "/parkside",
    element: <Resume
      companyName='Parkside Interactive'
      coverLetter={parkside}
      accentColor='#307cc4'
    />,
  },
  {
    path: "/for-hire",
    element: <Resume
      coverLetter={grazGeneral}
    />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode />
      <RouterProvider router={router} />
    <React.StrictMode />
  </>,
)
