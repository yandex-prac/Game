import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, PageNotFound } from './components'
import { BrowserRouter } from 'react-router-dom'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const response = await fetch('http://localhost:3001')
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
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

export default App
