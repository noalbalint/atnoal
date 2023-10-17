import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { velofood, capito, parkside } from './coverLetters';
import './index.css'
import './tailwind.css'
import Home from './pages/Home'
import ResumeWrapper from './pages/ResumeWrapper'
import Error404 from './pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: < Error404 />,
  },
  {
    path: "/velofood",
    element: <ResumeWrapper
      companyName='Velofood'
      coverLetter={velofood}
      accentColor='#01AD4C'
    />,
  },
  {
    path: "/capito",
    element: <ResumeWrapper
      companyName='Capito'
      coverLetter={capito}
      accentColor='#C00000'
    />,
  },
  {
    path: "/parkside",
    element: <ResumeWrapper
      companyName='Parkside Interactive'
      coverLetter={parkside}
      accentColor='#307cc4'
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
