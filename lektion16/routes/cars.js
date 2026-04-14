import express from 'express'
import {addCar, getCar} from '../controller.js'
const carRouter = express.Router()

carRouter.post('/cars', async (request, response)=>{
    const {brand, model} = request.body
    await addCar(brand, model)
    response.redirect('/')
})

carRouter.get('/cars/:id', (request, response)=>{
    const id = parseInt(request.params.id)
    const car = getCar(id)
    response.render('carDetail', {car})
})

export default carRouter