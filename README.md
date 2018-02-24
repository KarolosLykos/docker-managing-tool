## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Docker - [Download & Install Node.js](https://docs.docker.com/install/)

## System Requirements
To be able to run
- Node.js > 6.0
- Provide docker socket (/var/run/docker.sock)
- Docker for windows do not support Unix socket

## Features
- List all available Images and Containers (home)
- Create new Container (create) (provide and images name and name {optional: tag})
- Start/Stop/Restart/Delete a container (actions)
- List stats of a container (info)
- List logs of a container (logs)
- (info,logs pages requires reloading the page)

## Downloading tradeline

### Cloning The GitHub Repository
The recommended way to get MEAN.js is to use git to directly clone the MEAN.JS repository:

```bash
$ git clone https://github.com/kariolos/tradeline.git
```

This will clone the latest version of the tradeline repository 

## Quick Install
Once you've downloaded the repository and installed all the prerequisites, you have to install the dependencies

To install the dependencies, run this in the application folder from the command-line:

```bash
$ npm install
```

* It will install the dependencies needed for the application to run.

## Running Your Application

#Run your application using npm:

```bash
$ npm start
```

Your application should run on port 3000 with the *development* environment configuration, so in your browser just go to [http://localhost:3000](http://localhost:3000)

## Development and deployment With Docker

* Install [Docker](https://docs.docker.com/installation/#installation)

* Local development with Docker:
```bash
$ docker build -t 'tag-name' .
$ docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p ip:port:3000 'tag-name'
```
