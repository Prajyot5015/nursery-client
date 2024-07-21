import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

function AddPlant() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const addPlant = async ()=>{
        toast.loading("Adding Plant...")

        if(!name || !category || !price || !image || !description){
            toast.error("Please Enter All Details")

            return
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`,{
            name: name,
            price: price,
            category: category,
            image: image,
            description: description
        })

        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("")
        setPrice("")
        setDescription("")
        setImage("")
    }

    return (
        <div>
            <h1>Add Plant</h1>

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

                <button type='button' onClick={addPlant}>Add Plant</button>
            </form>



            <Toaster />
        </div>
    )
}

export default AddPlant