import { search } from '@/config/fuzzy'
import express from 'express'
import httpStatus from 'http-status'

const router = express.Router()

router.get('/search', async (req, res, next) => {
  const { q } = req.query
  try {
    const result = await search(q)
    res
      .status(httpStatus.OK)
      .json({
        code: httpStatus.OK,
        message: `results for search term: ${q || 'all'}`,
        data: {
          count: result.length,
          result
        }
      })
  } catch (e) {
    next(e)
  }
})

export default router
