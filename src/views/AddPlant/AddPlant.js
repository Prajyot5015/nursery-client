import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AddPlant() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const addPlant = async () => {
        toast.loading("Adding Plant...")

        if (!name || !category || !price || !image || !description) {
            toast.error("Please Enter All Details")

            return
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
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
            {<div>

                <form>
                    <div className="form-heading">
                        <h1>Add Nursery Plant</h1>
                    </div>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Plant Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='plant-input'
                        />
                    </div>

                    <div className="form-group">
                        <label for="category">Category:</label>
                        <input
                            type='text'
                            placeholder='Enter Plant Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='plant-input'
                        />
                    </div>


                    <div className="form-group">
                        <label for="description">Price:</label>
                        <input
                            type='number'
                            placeholder='Enter Plant Price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='plant-input '
                        />
                    </div>

                    <div className="form-group">
                        <label for="image">Image Preview</label>
                        <img src={image} alt='img' className='img-preview' />
                    </div>


                    <div className="form-group">
                        <label for="image">Image:</label>
                        <input
                            type='text'
                            placeholder='Enter Plant Image URL'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className='plant-input'
                        />
                    </div>

                    <div className="form-group">
                        <label for="description">Description:</label>
                        <input
                            type='text'
                            placeholder='Enter Plant Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='plant-input'
                        />
                    </div>

                    <button type="button" onClick={addPlant}>Add Plant</button>
                    <Link to="/" className='show-all-button'>Show All Plants</Link>
                </form>
                <br />
                <br />



                <Toaster />
            </div>}



            <Toaster />
        </div>
    )
}

export default AddPlant