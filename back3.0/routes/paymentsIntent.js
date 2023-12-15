const express = require('express');
const getOrderAmount = require('../data/getOrderAmount');

const router = express.Router();

const stripe = require('stripe')(process.env.STIPE_SK);

//CREAR INTENTO DE PAGO
router.post('/', async (req, res) => {
    const items = req.body;
    console.log(items)
    const paymentIntent = await stripe.paymentIntents.create({
    amount: await getOrderAmount(items),
    currency: 'usd',
    });
    res.send({
    clientSecret: paymentIntent.client_secret,
    });
});

module.exports = router;
