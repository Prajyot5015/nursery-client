import React, { useEffect, useState } from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function UpdatePlant() {
    const { id } = useParams()

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const updatePlant = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
            name : name,
            price : price,
            category : category,
            image : image,
            description : description  
        })

        toast.success(response.data.message)        
        setName("")
        setCategory("")
        setPrice("")
        setDescription("")
        setImage("")

    }

    const loadPlant = async (id) => {

        if (!id) {
            return
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

        const plantData = response.data.data

        const { 
            name,
            category,
            price,
            image,
            description
        } = plantData

        setName(name)
        setCategory(category)
        setDescription(description)
        setImage(image)
        setPrice(price)
    }

    useEffect(() => {
        loadPlant(id)
    }, [id])

    return (
        <div>
            <h1>Update Plant </h1>

            <form>
                <input
                    type='text'
                    placeholder='Enter Plant Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='plant-input'
                />

                <input
                    type='number'
                    placeholder='Enter Plant Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='plant-input'
                />

                <input
                    type='text'
                    placeholder='Enter Plant Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='plant-input'
                />

                <img src={image} alt='img' className='img-preview' />

                <input
                    type='text'
                    placeholder='Enter Plant image Url'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className='plant-input'
                />

                <input
                    type='text'
                    placeholder='Enter Plant Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='plant-input'
                />

                <button type='button' onClick={updatePlant}>Update Plant</button>
            </form>

        <Toaster />
        </div>
    )
}

export default UpdatePlant