import { Router } from 'express'
import IndexController from '../Controller/IndexController'

const router = Router()
const auth = IndexController.AuthController

router.post('/login', auth.login)

export default router