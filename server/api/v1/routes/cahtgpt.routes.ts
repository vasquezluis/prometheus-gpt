import { Router } from 'express'
import { getModels, chatgpt } from '../controllers/chatgpt.controllers'

const router = Router()

router.get('/api/v1/chatgpt/models', getModels)
router.post('/api/v1/chatgpt/chat', chatgpt)

export default router
