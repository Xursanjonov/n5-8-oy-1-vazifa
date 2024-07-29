const { users } = require('../server')
const express = require('express')
const router = express.Router()
router.use(express.json())

// GET USERS
router.get('/', (req, res) => {
    if (!users.length) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    res.status(200).json({
        msg: 'Barcha Foydalanuvchilar',
        variant: 'Success',
        payload: users
    })
})
// POST USER
router.post('/', (req, res) => {
    const conflig = users.find(user => user.username === req.body.username)
    if (conflig) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    let newUser = {
        id: new Date().getTime(),
        ...req.body
    }
    users.push(newUser)
    res.status(201).json({
        msg: 'User qo`shildi',
        variant: 'Success',
        payload: newUser
    })
})
// PUT USER
router.put('/:id', (req, res) => {
    let { id } = req.params
    const index = users.findIndex(user => user.id === +id)
    if (index < 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    users[index] = {
        ...users[index],
        ...req.body
    }
    res.status(201).json({
        msg: 'User o`zgartirildi',
        variant: 'Success',
        payload: req.body
    })
})
// DELETE USER
router.delete('/:id', (req, res) => {
    let { id } = req.params
    const index = users.findIndex(user => user.id === +id)
    if (index < 0) {
        return res.status(400).json({
            msg: 'Malumot topilmadi',
            variant: 'error',
            payload: null
        })
    }
    users.splice(index, 1)
    res.status(201).json({
        msg: 'User o`chirildi',
        variant: 'Success',
        payload: null
    })
})

module.exports = router