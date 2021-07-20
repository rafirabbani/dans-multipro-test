import { Router } from 'express'
import IndexController from '../Controller/IndexController'

const router = Router()
const job = IndexController.JobController
const auth = IndexController.AuthController

router.get('/all', auth.requireLogin, job.getAllJob)
router.get('/find', auth.requireLogin, job.findJob)
router.get('/job/:jobId', auth.requireLogin, job.getJobById)

export default router