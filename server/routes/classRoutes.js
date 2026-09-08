// server/routes/classRoutes.js
import { Router } from 'express'
import {
  listClasses,
  getClassBySlug,
  getClassById,
} from '../controllers/classController.js'
import { validateObjectIds } from '../middleware/validateObjectIds.js'

const router = Router()

router.get('/', listClasses)
router.get('/slug/:slug', getClassBySlug)
router.get('/:id', validateObjectIds('id'), getClassById)

export default router