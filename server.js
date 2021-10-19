const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

if (process.env.NODE_ENV === 'production') {
    // Serve static file in production env
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) { // Serve our application from our actual final production build
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if (error) throw error
    console.log('Server running on port ' + port)
})

app.post('/payment', function(req, res) {
    const bodyRequestToStripe = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(bodyRequestToStripe, (stripeError, stripeSuccess) => {
        if (stripeError) {
            res.status(500).send({error: stripeError})
        } else {
            res.status(200).send({success: stripeSuccess})
        }
    })
})