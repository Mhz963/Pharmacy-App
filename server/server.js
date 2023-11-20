const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('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');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Folks!');
});

app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.
    const { amount, curency } = req.body;
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customer.id },
        { apiVersion: '2023-10-16' }
    );
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: curency,
        customer: customer.id,
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
    });
});

app.listen(4002, () => console.log('Running on port 4002'));
