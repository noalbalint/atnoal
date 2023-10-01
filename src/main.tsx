import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { velofood } from './coverLetters';
import AnimatedCursor from "react-animated-cursor"
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
    />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode />
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color='1, 173, 76'
      />
      <RouterProvider router={router} />
    <React.StrictMode />
  </>,
)
