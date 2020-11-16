import { Router } from 'express'
import People from '../model/people'

const router = Router()
router.get('/', async (req, res) => {
  try {
    await People.remove({})
    res.json('all remove')
  } catch (err) {
    res.json({ mesaage: err })
  }
})

export default router
