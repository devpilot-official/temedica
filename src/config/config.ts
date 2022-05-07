export const ENVIRONMENT = process.env.APP_ENV || 'development'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_TEST = ENVIRONMENT === 'test'
export const APP_PORT = Number(process.env.APP_PORT) || 9000
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/'

export const APP_NAME = 'Temedic Test'
export const APP_URL = process.env.APP_URL
export const FRONT_END_URL = process.env.FRONT_END_URL

export const HMAC_SECRET = process.env.HMAC_SECRET
export const TEMEDICA_SECRET_HEADER = process.env.TEMEDICA_SECRET_HEADER
export const TEMEDICA_SECRET_KEY = process.env.TEMEDICA_SECRET_KEY
