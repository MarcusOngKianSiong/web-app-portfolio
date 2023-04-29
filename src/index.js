import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Documentation from './documentation/documentation';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/web-app-portfolio",
      element: <App/>,
    },
    {
      path: "/documentation",
      element: <Documentation/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* // <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
