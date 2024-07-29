const express = require('express')
const { categories } = require('../server')
const category = express.Router()
category.use(express.json())

// GET
category.get('/', (req, res) => {
    if (!categories.length) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    res.status(200).json({
        msg: 'Barcha Kategoriyalar',
        variant: 'Success',
        payload: categories
    })
})
