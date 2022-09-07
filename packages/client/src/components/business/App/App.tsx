import react, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, Main, PageError } from '../../../pages'
import { Wrap } from './StyledComponents'
import { ThemeContext } from '../../../context'

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Wrap>
      <BrowserRouter>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/main" element={<Main />} />
            <Route
              path="*"
              element={
                <PageError title="404" subtitle="Не туда попали" href="/" />
              }
            />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Wrap>
  )
}
