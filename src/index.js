import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import MarkdownDocumentation from './documentation/markdownDocumentation';
import Chat_App from './projects/project_chat_app/chat_app'
import ExecutionPath from './projects/executionPathApp/executionPathApp'
import SnapshotToSharableLink from './projects/snapshotToSharableLink/snapshotToSharableLink';
import DataVisualization from './projects/dataVisualization/dataVisualization';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate 
} from "react-router-dom";
import { Nav } from 'react-bootstrap';

const router = createBrowserRouter([
    {
      path: "/web-app-portfolio",
      element: <App/>,
    },
    {
      path: "/web-app-portfolio/documentation",
      element: <MarkdownDocumentation/>
    },{
      path: "/web-app-portfolio/chatapp",
      element: <Chat_App/>
    },{
      path: "/web-app-portfolio/pathexecutionapp",
      element: <ExecutionPath/>
    },{
      path: "/web-app-portfolio/snapshottosharablelink",
      element: <SnapshotToSharableLink/>
    },{
      path: "/web-app-portfolio/datavisualization",
      element: <DataVisualization />
    },{
      path: "/",
      element: <Navigate to="/web-app-portfolio"/>
      // Component: Takes a function call
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
