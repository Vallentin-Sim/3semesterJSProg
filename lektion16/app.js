import express from "express"
import session from "express-session"
import carRouter from "./routes/cars.js"
import userRouter from "./routes/users.js"
import {getCars} from "./controller.js"

const app = express()

app.set('view engine', 'pug')
app.use(express.static('assets'))
app.use(express.urlencoded())
app.use(session({
    secret: 'A93!BD61-8C03-ø536-84CA-98@E4E398FAC',
    saveUninitialized: true,
    resave: true
}))

app.get('/', (request, response)=>{
    const isItAValidUser = request.session.isItAValidUser
    const cars = getCars()
    response.render('index', {cars, isItAValidUser})
})

app.use('/users', userRouter)
app.use('/cars', carRouter)

app.use((request, response,next)=>{
    response.render('404', {})
})

app.listen(8960, ()=>{console.log('Serveren kører på port 8960')})