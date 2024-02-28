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
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})

export default routes