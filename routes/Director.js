import express from 'express'
import DirectorModel from '../models/Director.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    DirectorModel.find({})
    .then((directors) => {
       return res.status(201).json(directors)
    })
    .catch((err) => {
       return res.status(510).send('Erreur ...')
    })
})

routes.get('/names', (req, res) => {
   DirectorModel.find({},{_id:0,name:1})
   .then((directors) => {
      return res.status(201).json(directors)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.get('/movies', (req, res) => {
   MovieModel.aggregate([{$unwind:"$actors"} ,{$group:{_id:"$actors",nb_movies:{$sum:1}}}])
   .then((directors) => {
      return res.status(201).json(directors)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.post('/add', (req, res) => {
   const director = req.body

   DirectorModel.create(director)
   .then((director) => {
      return res.status(201).json(director)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.put('/update/:name', (req, res) => {
   const director = req.body
   const name = req.params.name

   DirectorModel.updateOne({name:name},actor)
   .then((resOP) => {
      return res.status(201).json(resOP)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})

routes.delete('/delete/:name', (req, res) => {
   const name = req.params.name

   DirectorModel.deleteOne({name:name})
   .then((resOP) => {
      return res.status(201).json(resOP)
   })
   .catch((err) => {
      return res.status(510).send('Erreur ...')
   })
})


export default routes