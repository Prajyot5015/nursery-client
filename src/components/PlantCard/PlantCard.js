import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function PlantCard({ _id, name, category, image, price, description, loadPlants }) {

  const deletePlant = async (plantId) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)

    toast.success(response.data.message)
    loadPlants()
  }

  return (
    <div className="container">
      <div className='plant-card'>
        <img src={image} className='plant-image' />
        <div className='plant-details'>
          <div className='plant-name'>{name}</div>
          <div className='plant-category'>{category}</div>
          <p className='plant-price'>Price:{price}</p>

          <div className='plant-description'>{description}</div>
          <div className="button-container">


            <Link
              className='button update-button'
              to={`/update/${_id}`}>
              Edit
            </Link>

            <button
              type='button'
              className='button delete-button'
              onClick={() => {
                deletePlant(_id)
              }}>
              Delete</button>

          </div>



        </div>

      </div>
    </div>
  )
}

export default PlantCard