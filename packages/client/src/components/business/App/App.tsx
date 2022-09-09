import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { SignIn, SignUp, PageError } from '../../../pages'
import { Wrap } from './StyledComponents'
import { ThemeContext } from '../../../context'
import { ForumPage } from '../../../pages/ForumPage'

export const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Wrap>
      <BrowserRouter>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forum' element={<ForumPage />} />
            <Route
              path='/error'
              element={
                <PageError title='400' subtitle='Какая-то ошибка' href='/' />
              }
            />
            <Route
              path='/error404'
              element={
                <PageError title='404' subtitle='Не туда попали' href='/' />
              }
            />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Wrap>
  )
}
