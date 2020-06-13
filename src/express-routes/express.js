const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const item_router = require('./items/item_router')


app.use('/items', item_router)


app.listen(PORT, () => {
    console.log('Server started');
})