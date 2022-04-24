import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTours(data)
    setIsLoading(false)
  }

  const deleteTour = (id) => {
    const newTours = tours.filter(i => i.id !== id)
    setTours(newTours)
  }

  useEffect(()=> {
    fetchData()
  }, [])

  if (isLoading) {
    return <main><Loading /></main>
  } else {
    return (
      <main>
        { tours.map((tour, index) => <Tours  key={index} {...tour} deleteTour={deleteTour} />) }
      </main>
    )
  }
}

export default App
