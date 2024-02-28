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

})

routes.get('/movies', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})


export default routes