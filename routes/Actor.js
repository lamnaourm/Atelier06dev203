import express from 'express'
import ActorModel from '../models/Actors.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    ActorModel.find({})
     .then((actors) => {
        return res.status(201).json(actors)
     })
     .catch((err) => {
        return res.status(510).send('Erreur ...')
     })
})

routes.get('/names', (req, res) => {

})

routes.get('/movies', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.put('/delete/:name', (req, res) => {
    
})


export default routes