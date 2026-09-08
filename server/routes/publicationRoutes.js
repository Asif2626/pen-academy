// server/routes/publicationRoutes.js
import { Router } from 'express'
import { listPublications } from '../controllers/publicationController.js'

const router = Router()

router.get('/', listPublications)

export default router