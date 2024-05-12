import React from 'react'
import axios from "axios"

async function createProduct(userData){
    try{
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, userData)  //http://localhost:5126/api/Product/create?  https://jsonplaceholder.typicode.com/posts 
        await console.log(response)
        return response.data;
    } catch (error) {
        throw new Error("Error create product")
    }
}

const newData = {
    name: "Mango",
    count: "69",
    price: "96",
    energyValie: "13",
}
createProduct(newData).then(createdProduct => console.log("succsesful", createdProduct)).catch(error => console.error(error))

export default function ProductPage() {
  return (
    <div>ProductPage</div>
  )
}
