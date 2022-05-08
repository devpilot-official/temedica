import app from './app'
import { APP_PORT } from '@/config/config'
import logger from './config/logger'

logger.info('starting up server...')

app.listen(APP_PORT, () => {
  logger.info(`server listening on ${APP_PORT}`)
})

// If the Node process ends, close the Mongoose connection (ctrl + c)
process.on('SIGINT', () => {
  process.exit(0)
})

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception: ' + err)
})
