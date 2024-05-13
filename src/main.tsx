import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import LandingPage from './pages/LandingPage.tsx'
import UserListPage from './pages/UserListPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'users',
        element: <UserListPage />,
      },
      {
        path: '*',
        element: <ErrorPage message="404 - Address not found!" />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
