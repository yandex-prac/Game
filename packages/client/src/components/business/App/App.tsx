import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
  SignIn,
  SignUp,
  Main,
  Profile,
  ProfileEdit,
  PasswordEdit,
  Forum,
  LeaderBoard,
  PageError,
} from '@/pages'
import { Wrap } from './StyledComponents'
import { ThemeContext } from '@/context'
import { PATHNAMES } from '@/utils'
import { Snackbar } from '@/components'

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Wrap>
      <Snackbar />
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Routes>
          <Route path={PATHNAMES.SIGNIN} element={<SignIn />} />
          <Route path={PATHNAMES.SIGNUP} element={<SignUp />} />
          <Route path={PATHNAMES.MAIN} element={<Main />} />
          <Route
            path={PATHNAMES.PROFILE}
            element={<Profile darkMode={darkMode} />}
          />
          <Route
            path={PATHNAMES.PROFILE_EDIT}
            element={<ProfileEdit darkMode={darkMode} />}
          />
          <Route
            path={PATHNAMES.PASSWORD_EDIT}
            element={<PasswordEdit darkMode={darkMode} />}
          />
          <Route
            path={PATHNAMES.FORUM}
            element={<Forum darkMode={darkMode} />}
          />
          <Route
            path={PATHNAMES.LEADER_BOARD}
            element={<LeaderBoard darkMode={darkMode} />}
          />
          <Route
            path={PATHNAMES.PATH_NOT_FOUND}
            element={
              <PageError
                titleIntl="PAGE_NOT_FOUND_TITLE"
                subtitleIntl="PAGE_NOT_FOUND_SUBTITLE"
                href={PATHNAMES.SIGNIN}
              />
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </Wrap>
  )
}
