const router = require('express').Router()
const db = require('../models')

router.get('/seed', (req, res) => {
    db.Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

router.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
        res.send({ books })
    })
    .catch(err => {
        console.log(err) 
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id)
    .then(book => {
        res.send({ book })
    })
    .catch(err => {
        console.log('err', err)
        res.send(err)
    })
})

router.post('/', (req, res) => {
    db.Book.create(req.body)
    .then(() => {
        console.log(req.body)
        res.send(req.body)
    })
    .catch(err => {
        console.log('err', err)
        res.send(err)
    })
})

router.put('/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        console.log(req.body)
        res.send(req.body)
    })
    .catch(err => {
        console.log('err', err)
        res.send(err)
    })
})


router.delete('/:id', (req, res) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then(() => {
        console.log(req.body)
        res.send(req.body)
    })
    .catch(err => {
        console.log('err', err)
        res.send(err)
    })
})


module.exports = router