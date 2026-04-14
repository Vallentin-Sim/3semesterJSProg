import Archive from './archive.js'
import User from './model/user.js'
import Car from './model/car.js'

let users = [new User('ole', '123')]
let cars = []

let carsData = await Archive.readFile('data/cars.json')
if (carsData){
    cars = JSON.parse(carsData)
    const biggestID = cars.reduce((accumulator, car) => {
         return car.id >= accumulator ? car.id : accumulator
    },0)
    Car.id = biggestID + 1
}

let usersData = await Archive.readFile('data/users.json')
if (usersData){
    users = JSON.parse(usersData)
    const biggestID = users.reduce((accumulator, user) => {
         return user.id >= accumulator ? user.id : accumulator
    },0)
    User.id = biggestID + 1
}

async function addCar(brand, model) {
    const car = new Car(brand, model)
    cars.push(car)
    // 🐷 kode. writefile skal indkapsles
    await Archive.writeFile('data/cars.json', JSON.stringify(cars))
}

async function addUser(username, password) {
    const user = new User(username,password)
    users.push(user)
    // 🐷 kode. writefile skal indkapsles
    await writeFile('data/users.json', JSON.stringify(users))
}

async function deleteUser(userid) {
    users = users.filter(user=>user.id != userid)
    await writeFile('data/users.json', users)
}

function getUsers(){
    return users
}

function getCars() {
    return cars
}

function getCar(id){
    return cars.find(car=>car.id == id)
}

export {addUser, addCar, getUsers, getCars, getCar, deleteUser}