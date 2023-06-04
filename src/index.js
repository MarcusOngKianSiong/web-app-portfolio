import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Documentation from './documentation/documentation';
import MarkdownDocumentation from './documentation/markdownDocumentation';
import Chat_App from './projects/project_chat_app/chat_app'
import ExecutionPath from './projects/executionPathApp/executionPathApp'
import SnapshotToSharableLink from './projects/snapshotToSharableLink/snapshotToSharableLink';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/*",
      element: <App/>,
    },
    {
      path: "/*/documentation",
      element: <MarkdownDocumentation/>
    },{
      path: "/*/chatapp",
      element: <Chat_App/>
    },{
      path: "/*/pathexecutionapp",
      element: <ExecutionPath/>
    },{
      path: "/*/snapshottosharablelink",
      element: <SnapshotToSharableLink/>
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}/>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
