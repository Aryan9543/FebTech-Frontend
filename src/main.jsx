import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Project from './components/Project/Project.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import { Client } from './components/Client/Client.jsx';
import Career from './components/Careers/Career.jsx';
import Services from './components/Services/Services.jsx';
import Blog from './components/Blog/Blog.jsx';

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      },
      {
        path: "/client",
        element: <Client />
      },
      {
        path: "/careers",
        element: <Career />
      },
      {
        path: "/blog",
        element: <Blog />
      }

    ]
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
