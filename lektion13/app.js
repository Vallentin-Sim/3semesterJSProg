import express from 'express';

const app = express();
const cars = [
  { brand: 'Toyota', model: 'Corolla' },
  { brand: 'Honda', model: 'Civic' },
  { brand: 'Ford', model: 'Mustang' },
];

app.use(express.static('assets'));

app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('homepage', { cars });
});

app.get('/cars', (req, res) => {
  res.render('cars', { cars });
});

app.get('/cars/car', (req, res) => {
  const { brand, model } = req.query;
  const car = { brand, model };
  res.render('car', { car });
});

app.post('/cars', (req, res) => {
  const { brand, model } = req.body;
  const car = { brand, model };
  cars.push(car);
  console.log(`Received new car: ${car.brand} ${car.model}`);
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});