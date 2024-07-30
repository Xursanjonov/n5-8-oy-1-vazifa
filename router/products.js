const { products } = require('../server')
const express = require('express')
const product = express.Router()
product.use(express.json())

// product GET
product.get('/', (req, res) => {
    // res.send(users) send -> json
    if (!products.length) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    res.status(200).json({
        msg: 'Barcha Mahsulotlar',
        variant: 'Success',
        payload: products
    })
})
// product detail get
product.get(`/:id`, (req, res) => {
    let id = req.params.id
    const product = products.findfind(el => el.id === +id)
    if (product) {
        res.status(200).json({
            msg: 'Mahsulot',
            variant: 'Success',
            payload: product
        })
    }
    return res.status(400).json({
        msg: 'Malumot topilmadi',
        variant: 'error',
        payload: null
    })
})
// products POST
product.post('/', (req, res) => {
    const conflig = products.find(el => el.title === req.body.title)
    if (conflig) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    } else {
        let newProduct = { id: new Date().getTime(), ...req.body }
        products.push(newProduct)
        res.status(201).json({
            msg: 'Mahsulot qo`shildi',
            variant: 'Success',
            payload: newProduct
        })
    }
})
// products DELETE
product.delete(`/:id`, (req, res) => {
    let id = req.params.id
    const index = products.findIndex(el => el.id === +id)
    console.log(index)
    if (index <= 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    products.splice(index, 1)
    res.status(201).json({
        msg: 'Mahsulot o`chirildi',
        variant: 'Success',
        payload: null
    })
})
// products PUT
product.put(`/:id`, (req, res) => {
    let { id } = req.params
    const index = products.findIndex(product => product.id === +id)
    console.log(index)
    if (index < 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    else {
        let newProduct = { ...req.body }
        products.splice(index, 1, newProduct)
        res.status(201).json({
            msg: 'Mahsulot Updated',
            variant: 'Success',
            payload: newProduct,
        })
    }
})

module.exports = product