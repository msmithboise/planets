let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let galaxyRoutes = require('./routes/galaxies')

server.use('/api/galaxies', galaxyRoutes)

server.use('/api/*', (erro,req, res, next) =>{
    res.send(error)
})

server.use('*', (req, res, next)=>{
    res.status(404).send('<h1>No PAGE FOUND</h1>')
})






server.listen(port, () => {
    console.log('SPACE...', port)
}) 