import { Router } from 'express'
import irregularController from '../controllers/irregularController'

const router = Router()
router.post('/', irregularController)

export default router
