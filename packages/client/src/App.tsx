import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, PageNotFound } from './components'

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
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
