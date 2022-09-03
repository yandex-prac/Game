import react from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, PageNotFound } from '../../../pages'
import { Wrap } from './StyledComponents'

export const App = () => {
  return (
    <Wrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  )
}
