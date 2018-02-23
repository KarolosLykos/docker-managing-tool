const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const dockerConfig = require('./config/docker')
const appConfig = require('./config/app')

const app = express()
const server = require('http').Server(app)
global.io = require('socket.io')(server)

// Express Router seperate folder
const docker = require('./routes/docker/docker')
// CORS Middleware
app.use(cors())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.json())
app.use(function(req, res, next) {
  req.io = io;
  next();
});

// Send /docker to docker routes file
app.use('/docker',docker)

app.get('/', (req,res,next) => {
	res.send('Invalid')
})

// Make sure all the routes ,except the ones we specify, goes to the index file
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Start Server
server.listen(appConfig.port, appConfig.host, () => {
  console.log(`Running on http://${appConfig.host}:${appConfig.port}`)
})