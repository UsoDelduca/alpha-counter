import * as Path from 'node:path/posix'
import * as URL from 'node:url'
import * as fs from 'node:fs/promises'
import pageRoute from './routes.js'

// import editRoute from './routes.js'

import express from 'express'
import hbs from 'express-handlebars'

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

server.use('/', pageRoute)

export default server
