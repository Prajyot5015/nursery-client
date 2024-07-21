import './Home.css';
import React, { useEffect, useState } from 'react'
import PlantCard from '../../components/PlantCard/PlantCard';
import axios from 'axios'

function Home() {

  const [plants, setPlants] = useState([])

  const loadPlants = async ()=> { 
    const response = await axios.get('http://localhost:5000/plants')
    setPlants(response.data.data)
  }

  useEffect(() => {
    loadPlants()
  }, [])

  return (
    <div>
      <h1>Plants</h1>

      {
        plants.map((plant, i) => {
          const {
            _id,
            name,
            category,
            price,
            image,
            description } = plant

          return (<PlantCard
            key={i}
            _id={_id}
            name={name}
            category={category}
            price={price}
            image={image}
            description={description}
          />)
        })
      }
    </div>
  )
}

export default Home