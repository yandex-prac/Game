import react from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, PageNotFound } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
