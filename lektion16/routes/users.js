import express from 'express'
import { checkUser } from "../model/user.js"
import {addUser, getUsers, deleteUser} from '../controller.js'

const userRouter = express.Router()

userRouter.post('/login', (request, response)=>{
    const {username, password} = request.body
    request.session.isItAValidUser = checkUser(username, password)
    response.redirect('/')
})

userRouter.post('/', async (request, response)=>{
    const {username, password} = request.body
    await addUser(username, password)
    response.redirect('/') 
})

userRouter.get('/', (request, response)=>{
    if (request.session.isItAValidUser) {
        const users = getUsers()
        response.render('usersList', {users})
    } else {
        response.redirect('/')
    }
})

userRouter.delete('/:id', async (request, response)=>{
    const userid = request.params.id
    await deleteUser(userid)
    response.json({message:`Brugeren med id ${userid} er nu slettet`})
})

userRouter.get('/logout', (request, response)=>{
    request.session.destroy()
    response.redirect('/')
})

export default userRouter