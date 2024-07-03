import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import FormComponent from './components/FormComponent'
const route = createBrowserRouter([{
  path: "/",
  element: <FormComponent />
}])
const App = () => {
  return (
    <>
    </>
  )
}

export default App
