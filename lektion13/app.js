import express from 'express';
import { Car } from './model/car.js';

const app = express();
let cars = [];



app.use(express.static('assets'));

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.render('homepage', { cars });
});

app.get('/cars/:id', (request, response)=>{
    const id = parseInt(request.params.id)
    const car = cars.find(car=>car.id === id)
    response.render('cars', {car})
})

app.post('/cars', (req, res) => {
  const { brand, model } = req.body;
  const car = new Car(brand, model);
  cars.push(car);
  console.log(`Received new car: ${car.brand} ${car.model}`);
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});