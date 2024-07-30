const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const user = require('./router/users')
const product = require('./router/products')
const category = require('./router/category')

app.use('/products', product);
app.use('/users', user);
app.use('/categories', category);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started ${PORT}`))