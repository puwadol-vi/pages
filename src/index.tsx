import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.tsx'
import HealthCheck from './pages/HealthCheck.tsx'
import Home from './pages/Home.tsx'
import UserPage from './pages/UserPage.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/user/:id',
      element: <UserPage />,
    },
    {
      path: '/app',
      element: <App />,
    },
    {
      path: "/health",
      element: <HealthCheck />,
    },
  ],
  {
    basename: '/pages', // change
  },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
