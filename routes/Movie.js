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
   
})

routes.get('/years/:year1/:year2', (req, res) => {
   
})

routes.get('/listcategory/:category', (req, res) => {
   
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