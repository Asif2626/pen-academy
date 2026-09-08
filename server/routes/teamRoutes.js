// server/routes/teamRoutes.js
import { Router } from 'express'
import { listTeam } from '../controllers/teamController.js'

const router = Router()

router.get('/', listTeam)

export default router