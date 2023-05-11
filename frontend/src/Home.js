import React from 'react'
import { useEffect, useState } from 'react'

import CarDetails from './components/CarDetails'
function Home() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
    const fetchCars = async () => {
        const response = await fetch('/api/carData')
        const json = await response.json()
      console.log(json)
        if (response.ok) {
            setCars(json)

        }
    }
    fetchCars()
}, [])

  return (
    <div className='home'>
      <div >
        <iframe className='iframe__top' src="https://creative.budget.co.il/budget_28-3-2023/?LinkID=Yad2&utm_source=YAD2&utm_medium=930_180_Banner&utm_campaign=salesevent"/>
      </div>
        <div className="home__flex">
        <iframe className='iframe__leftcorner' src="https://lp7.opl.co.il/Mini/?utm_source=yad2&utm_medium=TV_D&utm_campaign=opl"/>
        <div className='cars'>
          {cars && cars.map((car) => (
            <CarDetails key= {car._id} car = {car} />
          ))}  
        </div>
        </div>
    </div>
  )
}

export default Home