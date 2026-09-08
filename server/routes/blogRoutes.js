// server/routes/blogRoutes.js
import { Router } from 'express'
import { listBlogs, getBlogBySlug } from '../controllers/blogController.js'

const router = Router()

router.get('/', listBlogs)
router.get('/slug/:slug', getBlogBySlug)

export default router