const express = require('express')
const router = express.Router()
const {Docker} = require('node-docker-api')
const dockerConfig = require('../../config/docker')
const path = require('path')
const docker = new Docker({ socketPath: dockerConfig.socket })
const dockerId = '7c0e8dd5c1a7'

// Temp variables
const dockerImage = 'tutum/hello-world'
const dockerTag = 'latest'
const dockerName = 'name1'

// List all images
router.get('/images/list', async (req,res,next) => {
	try {
	    const images = await docker.image.list()
		let imageArray = []
		images.forEach((image) => {
			let imageInfo = {
				'containers':image.data.Containers,
				'id':image.data.Id,
				'repoTags':image.data.RepoTags,
			}
			imageArray.push(imageInfo)
		})
		res.json({success:true, data:imageArray})
	}
	catch(err) {
	    res.json({success:false, msg:'Something went wrong'})
	}
})

// Get container info
router.post('/container/info', async (req,res,next) => {
	let id = req.body.params.id
	let containers = await docker.container.list({all:true})
	let container = containers.find( (container)=> {
		return container.data.Id === id
	})
	res.json({success:true, data:container.data})
})

// Start container
router.post('/container/start', async (req,res,next) => {
	try {
		let id = req.body.params.id
		let containers = await docker.container.list({all:true})
		let container = containers.find( (container)=> {
			return container.data.Id === id
		})
		container.start()
		.catch(error => res.json({success:false, msg:err}));
	   res.json({success:true,msg:'Container Started'})
	}
	catch(err) {
	    res.json({success:false, msg:'Something went wrong'})
	}
})

// Stop container
router.post('/container/stop', async (req,res,next) => {
	try {
		let id = req.body.params.id
		let containers = await docker.container.list({all:true})
		let container = containers.find( (container)=> {
			return container.data.Id === id
		})
	   container.stop()
	   .catch(error => res.json({success:false, msg:err}))
	   res.json({success:true,msg:'Container Stopped'})
	}
	catch(err) {
	    res.json({success:false, msg:'something went wrong'})
	}
})

// Restart container
router.post('/container/restart', async (req,res,next) => {
	try {
		let id = req.body.params.id
		let containers = await docker.container.list({all:true})
		let container = containers.find( (container)=> {
			return container.data.Id === id
		})
	   await container.restart()
	   res.json({success:true,msg:'Container Restarted'})
	}
	catch(err) {
	    res.json({success:false, msg:'Something went wrong'})
	}
})

// Delete container
router.delete('/container/delete', async (req,res,next) => {
	try {
		let id = req.query.id
		let containers = await docker.container.list({all:true})
		let container = containers.find( (container)=> {
			return container.data.Id === id
		})
	   await container.delete({ force: true })
	   res.json({success:true, msg:'Container deleted'})
	}
	catch(err) {
	    res.json({success:false, msg:'Something went wrong'})
	}
})

// List all containers
router.get('/containers/list', async (req,res,next) => {
	try {
	    const containers = await docker.container.list({all:true})
		let containersArray = []
		containers.forEach((container) => {
		let containerInfo = {
			'id':container.data.Id,
			'name':container.data.Names,
			'state':container.data.State,
			'status':container.data.Status,
			'image':container.data.Image,
			'created': container.data.Created,
			'cmd': container.data.Command
		}
		containersArray.push(containerInfo)
	})
		res.json({success:true, data:containersArray})
	}
	catch(err) {
	    res.json({success:false, msg:'Something went wrong'})
	}
})

// Container Top
router.get('/container/top', (req,res,next) => {
	let container = docker.container.get(req.query.id)
	container.top()
	.then(processes => res.json({success: true, data:processes}))
  	.catch(err => res.json({success: false, data:err}))
})

// Inspect Container
router.get('/container/status', async (req,res,next) => {
	let nsp = io.of('stats')	
	let id = req.query.id
		let containers = await docker.container.list({all:true})
		let container = containers.find( (container)=> {
			return container.data.Id === id
		})
	let counter = 0
	container.stats()
  	.then(stats => {
	    stats.on('data', stat => {
	    	nsp.setMaxListeners(0)
	    	nsp.emit('stats', {stat: stat.toString()})

	    	counter+= 1
	    	if (counter > 10) {stats.destroy()}
	    })
	    stats.on('err', err => res.json({success:false,msg:err}))
	  })
  	.catch(err => res.json({success:false, msg:err}))
 	res.json({success:true, data:'this is a message'})
})

// Create new container
router.post('/container/create', (req,res,next) => {
	let nsp = io.of('create')	
	docker.image.create({}, { fromImage: req.body.params.image, tag: req.body.params.tag })
	  .then(() => {
	  		let image = docker.image.get(req.body.image)
		  	docker.container.create({
				Image: req.body.params.image,
				name: req.body.params.name
			}).then(container => {
			 	res.json({success:true, msg:'Container created!'})	
			}).catch(err => res.json({success:false, msg:err.message}))
	  })
	  .catch(err => console.log(err))
})



// Get logs 
router.get('/container/logs', (req,res,next) => {
	let nsp = io.of('logs')	
	let container = docker.container.get(req.query.id)
	container.logs({
	    follow: true,
	    stdout: true,
	    stderr: true
	  })
	  .then(stream => {
	    stream.on('data', info => {
		    	nsp.setMaxListeners(0)
		    	nsp.emit('logs', {info: info.toString()})
	    })
	    stream.on('err', err => res.json({success:false, msg:err}))
	  })
  	  .catch(err => res.json({success:false, msg:err}))
  	  res.json({success:true, data:'this is a message'})
})
module.exports = router
