import './Home.css';
import React, { useEffect, useState } from 'react'
import PlantCard from '../../components/PlantCard/PlantCard';

function Home() {


  const [plants, setPlant] = useState([])

  const loadPlants = () => { }

  useEffect(() => {
    loadPlants
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