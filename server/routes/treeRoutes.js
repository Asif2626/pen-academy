// server/routes/treeRoutes.js
import { Router } from 'express'
import {
  getCurriculumTree,
  getCurriculumTreeBySlug,
} from '../controllers/treeController.js'

const router = Router()

router.get('/', getCurriculumTree)
router.get('/:classSlug', getCurriculumTreeBySlug)

export default router