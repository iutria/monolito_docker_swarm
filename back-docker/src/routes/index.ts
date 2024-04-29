import {Router} from "express";
import info from './info.route'
import TaskRoute from './task.route'

const router = Router();

router.use(TaskRoute)
router.use(info)

export default router;