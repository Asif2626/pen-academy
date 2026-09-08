// server/routes/mediaRoutes.js
import { Router } from 'express'
import { listMedia } from '../controllers/mediaController.js'

const router = Router()

router.get('/', listMedia)

export default router