import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './pages/Error-page';
import About from './pages/About-page';
import Logement from './pages/Logement';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
