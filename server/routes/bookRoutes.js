// server/routes/bookRoutes.js
import { Router } from 'express'
import { listBooks } from '../controllers/bookController.js'
import { validateObjectIds } from '../middleware/validateObjectIds.js'

const router = Router()

router.get('/', validateObjectIds('classId'), listBooks)

export default router