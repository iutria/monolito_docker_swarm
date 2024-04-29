import {Router} from "express";
import { 
    postTaskController, 
    deleteTaskController, 
    getTaskController, 
    getTasksController, 
    putTaskController 
} from "../controllers/task.controller";

const router = Router();

router.get('/tasks', getTasksController);
router.get('/tasks/:id', getTaskController);
router.post('/tasks', postTaskController);
router.put('/tasks/:id', putTaskController);
router.delete('/tasks/:id', deleteTaskController);

export default router;