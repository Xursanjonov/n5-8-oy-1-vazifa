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
// POST
category.post('/', (req, res) => {
    const conflig = categories.find(el => el.name === req.body.name)
    if (conflig) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    categories.push({
        id: new Date().getTime(),
        ...req.body,
    })
    res.status(201).json({
        msg: 'Kategoriya yaratildi',
        variant: 'Success',
        payload: req.body
    })
})
// PUT
category.put('/:id', (req, res) => {
    let { id } = req.params
    const index = categories.findIndex(category => category.id === +id)
    if (index < 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    categories[index] = {
        ...categories[index],
        ...req.body
    }
    res.status(201).json({
        msg: 'Kategoriya o`zgartirildi',
        variant: 'Success',
        payload: req.body
    })
})
// DELETE
category.delete('/:id', (req, res) => {
    let { id } = req.params
    const index = categories.findIndex(category => category.id === +id)
    if (index < 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    categories.splice(index, 1)
    res.status(201).json({
        msg: 'Kategoriya o`chirildi',
        variant: 'Success',
        payload: null
    })
})

module.exports = category