// server/routes/lectureRoutes.js
import { Router } from 'express'
import {
  listLectures,
  getLectureBySlug,
  getLectureByCode,
  getLectureById,
} from '../controllers/lectureController.js'
import { validateObjectIds } from '../middleware/validateObjectIds.js'

const router = Router()

router.get('/', validateObjectIds('chapterId', 'subjectId', 'classId'), listLectures)
router.get('/code/:code', getLectureByCode)
router.get('/slug/:slug', getLectureBySlug)
router.get('/:id', validateObjectIds('id'), getLectureById)

export default router