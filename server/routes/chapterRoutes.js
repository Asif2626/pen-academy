// server/routes/chapterRoutes.js
import { Router } from 'express'
import {
  listChapters,
  getChapterBySlug,
  getChapterById,
} from '../controllers/chapterController.js'
import { validateObjectIds } from '../middleware/validateObjectIds.js'

const router = Router()

router.get('/', validateObjectIds('classId', 'subjectId'), listChapters)
router.get('/slug/:slug', validateObjectIds('classId', 'subjectId'), getChapterBySlug)
router.get('/:id', validateObjectIds('id'), getChapterById)

export default router