const express = require('express')
const router = express.Router()
const {Docker} = require('node-docker-api')
const dockerConfig = require('../../config/docker')
const path = require('path')
const docker = new Docker({ socketPath: dockerConfig.socket })
const dockerId = '7c0e8dd5c1a7'


const promisifyStream = stream => new Promise((resolve, reject) => {
  stream.on('data', d => {
  	// Trigger event 
 //  	pusher.trigger('my-channel', 'my-event', {
	//   "message": d.toString()
	// })
	console.log(d.toString)
  })
  stream.on('end', resolve)
  stream.on('error', reject)
})


// Temp variables
const dockerImage = 'tutum/hello-world'
const dockerTag = 'latest'
const dockerName = 'name1'



// Create new container
router.get('/create', (req,res,next) => {
	docker.image.create({}, { fromImage: dockerImage, tag: dockerTag })
	  .then(stream => promisifyStream(stream))
	  .then(() => {
	  		let image = docker.image.get(dockerImage)
		  	docker.container.create({
				Image: image.id,
				name: dockerName
			}).then(container => {
			 	res.json({success:true, msg:'Container '+container.data.Id+' created!'})	
			}).catch(error => res.json({success:false, msg:error}))
	  })
	  .catch(error => res.json({success:false, msg:error}))
})

// Start container
router.get('/start', (req,res,next) => {
	let cont = docker.container.get(dockerId)
	cont.start()
	.catch((error) => {
		res.json({success:false, msg:error})
	})

	res.json({success:true, msg:'Container: '+dockerId+' started'})
})

// Stop container
router.get('/stop', (req,res,next) => {
	let container = docker.container.get(dockerId)
	container.stop()
	.catch((error) => {
		res.json({success:false, msg:error})
	})

	res.json({success:true, msg:'Container: '+dockerId+' stopped'})
})

// Restart container
router.get('/restart', (req,res,next) => {
	let container = docker.container.get(dockerId)
	container.restart()
	.catch((error) => {
		res.json({success:false, msg:error})
	})

	res.json({success:true, msg:'Container: '+dockerId+' restarted'})
})

// Delete container
router.get('/delete', (req,res,next) => {
	let container = docker.container.get(dockerId)
	console.log(container)
	container.delete({ force: true })
	.catch((error) => {
		res.json({success:false, msg:error})
	})

	res.json({success:true, msg:'Container: '+dockerId+' deleted'})
})

// List all containers
router.get('/containers/list', (req,res,next) => {
	docker.container.list({all:true})
	.then((containers) => {
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
	})
	.catch((error) => {
		res.json({success:false, msg:error})
	})
})

// List all images
router.get('/images/list', (req,res,next) => {
	docker.image.list()
	.then((images) => {
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
	})
	.catch((error) => {
		res.json({success:false, msg:error})
	})
})

// Container Top
router.get('/container/top', (req,res,next) => {
	let container = docker.container.get(req.query.id)
	container.top()
	.then(processes => res.json({success: true, data:processes}))
  	.catch(error => res.json({success: false, data:error}))
})

// Inspect Container
router.get('/container/status', (req,res,next) => {
	const io = req.io
	let container = docker.container.get(req.query.id)
	container.stats({stream:false})
  	.then(stats => {
	    stats.on('data', stat => res.json({success:true,data:stat.toString()}))
	    stats.on('error', err => res.json({success:false,msg:err}))
	  })
  	.catch(error => console.log(error))
})


// Get logs 
// router.get('/info', (req,res,next) => {
// 	let container = docker.container.get(dockerId)
// 	container.logs({
// 	    follow: true,
// 	    stdout: true,
// 	    stderr: true
// 	  })
// 	  .then(stream => promisifyStream(stream))
//   	  .catch(error => console.log(error))
// })
module.exports = router
