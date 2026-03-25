import express from "express"
import session from "express-session"
import {Car} from "./model/car.js"
import {User} from "./model/user.js"
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"
const app = express()

// Resolve absolute paths so file IO works regardless of the current working directory.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const usersFilePath = path.join(__dirname, 'data', 'users.json')
const carsFilePath = path.join(__dirname, 'data', 'cars.json')

app.set('view engine', 'pug')
app.use(express.static('assets'))
app.use(express.urlencoded())
app.use(session({
    secret: 'A93!BD61-8C03-ø536-84CA-98@E4E398FAC',
    saveUninitialized: true,
    resave: true
}))

let users = []
let cars = []
// Check ID verification, ensure ID on new entries is unique by checking the highest existing ID and adding 1.
// Create new similar function without using map, since the array is present.

// Read JSON asynchronously and fall back to default data if the file does not exist.
async function readJsonFile(filePath, fallbackData = []) {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const trimmedFileContent = fileContent.trim()

        if (!trimmedFileContent) {
            return fallbackData
        }

        return JSON.parse(trimmedFileContent)
    } catch (error) {
        if (error.code === 'ENOENT') {
            return fallbackData
        }

        throw error
    }
}

async function writeJsonFile(filePath, data) {
    await fs.writeFile(filePath, 
        JSON.stringify(data, null, 2), 'utf-8')
}

// Recreate User instances so methods and id tracking still work after loading from JSON.
async function loadUsers() {
    const storedUsers = await readJsonFile(usersFilePath, [{ username: 'ole', password: '123' }])
    users = storedUsers.map(user => new User(user.username, user.password, user.id))
}

// Recreate Car instances for the same reason as users.
async function loadCars() {
    const storedCars = await readJsonFile(carsFilePath, [])
    cars = storedCars.map(car => new Car(car.brand, car.model, car.id))
}

async function saveUsers() {
    await writeJsonFile(usersFilePath, users)
}

async function saveCars() {
    await writeJsonFile(carsFilePath, cars)
}

// Load both datasets before the server starts handling requests.
async function initializeData() {
    await Promise.all([loadUsers(), loadCars()])
}

app.get('/', (request, response)=>{
    const isItAValidUser = request.session.isItAValidUser
    response.render('index', {cars, isItAValidUser})
})

app.post('/cars', async (request, response, next)=>{
    try {
        const {brand, model} = request.body
        const car = new Car(brand, model)
        cars.push(car)
        await saveCars()
        response.redirect('/')
    } catch (error) {
        next(error)
    }
})

app.post('/login', (request, response)=>{
    const {username, password} = request.body
    request.session.isItAValidUser = checkUser(username, password)
    response.redirect('/')
})

app.post('/users', async (request, response, next)=>{
    try {
        const {username, password} = request.body
        const user = new User(username,password)
        users.push(user)
        await saveUsers()
        response.redirect('/')
    } catch (error) {
        next(error)
    }
})

app.get('/users', (request, response)=>{
    if (request.session.isItAValidUser) {
        response.render('usersList', {users})
    } else {
        response.redirect('/')
    }
})

app.delete('/users/:id', async (request, response, next)=>{
    try {
        const userid = request.params.id
        users = users.filter(user=>user.id != userid)
        await saveUsers()
        response.json({message:`Brugeren med id ${userid} er nu slettet`})
    } catch (error) {
        next(error)
    }
})

app.get('/logout', (request, response)=>{
    request.session.destroy()
    response.redirect('/')
})

app.get('/cars/:id', (request, response)=>{
    const id = parseInt(request.params.id)
    const car = cars.find(car=>car.id == id)
    response.render('carDetail', {car})
})


app.use((request, response,next)=>{
    response.render('404', {})
})

// Keep async route errors in one place instead of duplicating response handling.
app.use((error, request, response, next) => {
    console.error(error)
    response.status(500).send('Der opstod en fejl ved læsning eller skrivning af data.')
})

await initializeData()
app.listen(8960, ()=>{console.log('Serveren kører på port 8960')})


// simulator af SQL søgning i in database
function checkUser(username, password) {
   const user = users.find(user => user.username == username && user.password == password)
   if (user){
    return true
   } else {
    return false
   }
}