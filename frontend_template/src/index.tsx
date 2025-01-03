import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.tsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
  ],
  {
    basename: '/',
  },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
