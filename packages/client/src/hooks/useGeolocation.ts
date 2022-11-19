import { useEffect, useState } from 'react'
import axios from 'axios'

const success = async (position: GeolocationPosition, setGeolocation: any) => {
  try {
    const country = await axios.get('https://api.country.is/')
    setGeolocation({ ...position, country })
  } catch (err) {
    console.log(err)
  }
}

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState()
  useEffect(() => {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(position =>
          success(position, setGeolocation)
        )
      } catch (err) {
        console.log(err)
      }
    }
  }, [])

  return { geolocation }
}
