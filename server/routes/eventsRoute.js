var express = require('express')
var router = express.Router()

var eventsDb = require('../db/eventsDb')

// router.get('/', (req, res) => {
//   let db = req.app.get('db')
//   eventsDb.getCats(db)
//     .then(cats => {
//       res.json(cats)
//     })
// })

router.post('/', (req, res) => {
  let db = req.app.get('db')
  eventsDb.insertEvent(req.body, db)
    .then(event => res.json(event))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

// router.delete('/:id', (req, res) => {
//   let db = req.app.get('db')
//   eventsDb.deleteCat(req.params.id, db)
//     .then(() => res.sendStatus(202))
//     .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
// })

// router.put('/:id', (req, res) => {
//   console.log(req.body);
//   let db = req.app.get('db')
//   delete req.body.description
//
//   eventsDb.editCat(req.params.id, req.body, db)
//     .then((editedCat) => res.json(editedCat))
//     .catch(err => console.log(err))
// })

module.exports = router
