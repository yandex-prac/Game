import react, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
  SignIn,
  SignUp,
  Main,
  Profile,
  Settings,
  Forum,
  PageError,
} from '../../../pages'
import { Wrap } from './StyledComponents'
import { ThemeContext } from '../../../context'
import { PATHNAMES } from '../../../utils'

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Wrap>
      <BrowserRouter>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Routes>
            <Route path={PATHNAMES.SIGNIN} element={<SignIn />} />
            <Route path={PATHNAMES.SIGNUP} element={<SignUp />} />
            <Route path={PATHNAMES.MAIN} element={<Main />} />
            <Route path={PATHNAMES.PROFILE} element={<Profile />} />
            <Route path={PATHNAMES.SETTINGS} element={<Settings />} />
            <Route path={PATHNAMES.FORUM} element={<Forum />} />
            <Route
              path={PATHNAMES.PATH_NOT_FOUND}
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
