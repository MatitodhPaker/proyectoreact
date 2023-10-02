import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {App} from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/carousel.js';
import { Explorar, Favoritos, HomePage } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"/explorar",
    element: <Explorar/>
  },
  {
    path:"/favoritos",
    element: <Favoritos/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
