// server/routes/subjectRoutes.js
import { Router } from 'express'
import {
  listSubjects,
  getSubjectBySlug,
  getSubjectById,
} from '../controllers/subjectController.js'
import { validateObjectIds } from '../middleware/validateObjectIds.js'

const router = Router()

router.get('/', validateObjectIds('classId'), listSubjects)
router.get('/slug/:slug', validateObjectIds('classId'), getSubjectBySlug)
router.get('/:id', validateObjectIds('id'), getSubjectById)

export default router