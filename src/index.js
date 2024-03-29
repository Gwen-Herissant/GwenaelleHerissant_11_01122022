import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './pages/Error-page';
import About from './pages/About-page';
import Logement from './pages/Logement';
import ErrorData from './pages/ErrorData';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorData />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/logement/:id',
        element: <Logement />,
      },
      {
        path: '/error-data',
        element: <ErrorData />,
      },
      {
        path: '/error-page',
        element: <ErrorPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
