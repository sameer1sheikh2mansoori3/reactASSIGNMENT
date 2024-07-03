import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormComponent from './components/FormComponent'
const route = createBrowserRouter([{
  path: "/",
  element: <FormComponent />
}])
ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={route}>


    <App />
  </RouterProvider>

)
