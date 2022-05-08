import request from 'supertest'
import app from '@/app'
import httpStatus from 'http-status'
import { TEMEDICA_SECRET_HEADER } from '@/config/config'

const token = '8e351fae9f5659f828788c8b733b15ede72c329c6610901d7ad652ec083cd6da'

describe('Search Routes', () => {

  describe('GET /search', () => {
    it('should return all drugs with 200 status', async () => {
      const res = await request(app).get('/search').set('x-temedica-client', `${token}`).expect(httpStatus.OK)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('data')
      expect(res.body.code).toBe(httpStatus.OK)
      expect(res.body.message).toBe('results for search term: all')
    })

    it('should return 404 status if URL is not correct', async () => {
      const res = await request(app).get('/searches').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

    it('should return 404 status if request verb is incorrect', async () => {
      const res = await request(app).post('/search').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

    it('should return all drug with 200 status if query is empty', async () => {
        const res = await request(app).get(`/search?q=`).set("x-temedica-client", token).expect(httpStatus.OK)
        expect(res.body).toHaveProperty('code')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('data')
        expect(res.body.code).toBe(httpStatus.OK)
        expect(res.body.message).toBe('results for search term: all')
    })

    it('should return 404 status if URL is not correct with an empty search query', async () => {
      const res = await request(app).get('/searches?q=').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

    it('should return 404 status if request verb is incorrect with an empty search query', async () => {
      const res = await request(app).post('/search').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

    it('should return searched drug with 200 status', async () => {
        const res = await request(app).get(`/search?q=fl`).set('x-temedica-client', `${token}`).expect(httpStatus.OK)
        expect(res.body).toHaveProperty('code')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toHaveProperty('data')
        expect(res.body.code).toBe(httpStatus.OK)
        expect(res.body.message).toBe('results for search term: fl')
    })

    it('should return 404 status if URL is not correct with a search query', async () => {
      const res = await request(app).get('/searches?q=').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

    it('should return 404 status if request verb is incorrect with a search query', async () => {
      const res = await request(app).post('/search').expect(httpStatus.NOT_FOUND)
      expect(res.body).toHaveProperty('code')
      expect(res.body).toHaveProperty('message')
      expect(res.body).toHaveProperty('stack')
    })

  })
})
