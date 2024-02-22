import express from 'express'

const routes = express.Router()

routes.get('/all', (req, res) => {
   
})

routes.get('/actors/:filmname', (req, res) => {
   
})

routes.years('/years/:year1/:year2', (req, res) => {
   
})

routes.get('/listcategory/:category', (req, res) => {
   
})

routes.put('/update/:name', (req, res) => {
    
})

routes.put('/delete/:name', (req, res) => {
    
})

export default routes