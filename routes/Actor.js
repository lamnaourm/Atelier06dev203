import express from 'express'
import ActorModel from '../models/Actors.js'

const routes = express.Router()


routes.get('/all', async (req, res) => {
    ActorModel.find({})
     .then((actors) => {
        return res.status(201).json(actors)
     })
     .catch((err) => {
        return res.status(510).send('Erreur ...')
     })
})


export default routes