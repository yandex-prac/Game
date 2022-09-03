import react, { useContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, PageError } from '../../../pages'
import { Wrap } from './StyledComponents'
import { ThemeContext } from '../../../context'

export const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

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
