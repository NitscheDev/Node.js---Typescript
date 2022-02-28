import { Router } from 'express'
const router = Router()
//controllers
import { main } from '../controllers/main.controller'

//define routes
router.get('/', main)

//export router
export default router