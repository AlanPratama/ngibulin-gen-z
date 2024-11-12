import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import { HomePage } from './pages/HomePage'
import { ResultPage } from "./pages/ResultPage"
import { ErrorPage } from "./pages/errors/ErrorPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/result",
    element: <ResultPage/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
