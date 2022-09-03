import react from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, PageError } from '../../../pages'
import { Wrap } from './StyledComponents'

export const App = () => {
  return (
    <Wrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="*"
            element={
              <PageError title="404" subtitle="Не туда попали" href="/" />
            }
          />
        </Routes>
      </BrowserRouter>
    </Wrap>
  )
}
