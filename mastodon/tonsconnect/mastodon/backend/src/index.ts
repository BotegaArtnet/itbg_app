import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { AppDataSource } from './config/database'
import * as dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('Client connected')

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

// Initialize database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error)
  })

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Start server
const PORT = process.env.PORT || 3001
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
