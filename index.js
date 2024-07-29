const express = require('express')
const app = express()

app.use(express.json())
const user = require('./router/users')
const product = require('./router/products')

app.use('/products', product);
app.use('/users', user);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started ${PORT}`))