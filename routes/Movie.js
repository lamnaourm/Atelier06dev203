import express from 'express'
import MovieModel from '../models/Movie.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    MovieModel.find({})
    .then((movies) => {
       return res.status(201).json(movies)
    })
    .catch((err) => {
       return res.status(510).send('Erreur ...')
    })
})

routes.get('/actors/:filmname', (req, res) => {
   const name = req.params.filmname

   MovieModel.find({name: name}, {_id:0,actors:1})
    .then((actors) => {
       return res.status(201).json(actors[0].actors)
    })
    .catch((err) => {
       return res.status(510).send('Erreur ...')
    })
})

routes.get('/years/:year1/:year2', (req, res) => {
   const year1 = req.params.year1
   const year2 = req.params.year2

   MovieModel.find({year:{$gte:year1, $lte:year2 }})
    .then((movies) => {
       return res.status(201).json(movies)
    })
    .catch((err) => {
       return res.status(510).send('Erreur ...')
    })
})

routes.get('/listcategory/:category', (req, res) => {
   const categorie = req.params.category

   MovieModel.find({categories: categorie})
    .then((movies) => {
       return res.status(201).json(movies)
    })
    .catch((err) => {
       return res.status(510).send('Erreur ...')
    })
})

routes.post('/add', (req, res) => {
   const movie = req.body

   MovieModel.create(movie)
   .then((movie) => {
      return res.status(201).json(movie)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.put('/update/:name', (req, res) => {
   const movie = req.body
   const name = req.params.name

   MovieModel.updateOne({name:name},movie)
   .then((resOP) => {
      return res.status(201).json(resOP)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.delete('/delete/:name', (req, res) => {
   const name = req.params.name

   MovieModel.deleteOne({name:name})
   .then((resOP) => {
      return res.status(201).json(resOP)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

export default routes