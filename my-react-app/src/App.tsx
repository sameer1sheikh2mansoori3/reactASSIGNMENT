
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormComponent from './components/FormComponent'
import SecondPage from './pages/SecondPage.tsx'



const App = () => {






  return (
    <>

      <BrowserRouter>


        <Routes>


          <Route path='/' element={<FormComponent />}></Route>
          <Route path='second-page' element={<SecondPage />} ></Route>
        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
