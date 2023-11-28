import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content from './components/Content';
import About from './components/About';
import ResturantMenu from './components/ResturantMenu';
import Contact from './components/Contact';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} >
    <App />
  </RouterProvider>
);