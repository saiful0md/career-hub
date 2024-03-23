import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Applidejob from './components/Applidejob/Applidejob';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applidejob",
        element:<Applidejob></Applidejob>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
