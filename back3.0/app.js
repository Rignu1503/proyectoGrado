const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//BB:DD
mongoose.connect(process.env.DB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Conectado a BB.DD'));

//import routes
const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');
const paymentIntentRoutes = require('./routes/paymentsIntent');
const orderRoutes = require('./routes/orders')

//midelware
app.use(cors());
//solicitudes HTTP con formato JSON.
app.use(express.json())

app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
app.use('/create-payment-intent', paymentIntentRoutes)
app.use('/order', orderRoutes)


//ruta
app.get('/', (req, res) => {
    res.send('Hola Mundo');
})


//Item


// Start
app.listen(3000);