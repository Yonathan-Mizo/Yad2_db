import React from 'react'
import { useEffect, useState } from 'react'

import CarDetails from '../components/carDetails'
function Home() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
    const fetchCars = async () => {
        const response = await fetch('/api/cars')
        const json = await response.json()

        if (response.ok) {
            setCars(json)
        }
    }
    fetchCars()
}, [])

  return (
    <div className='home'>
        <div className='cars'>
          {cars && cars.map((car) => (
            <CarDetails key= {car._id} car = {car} />
          ))}  
        </div>
    </div>
  )
}

export default Home