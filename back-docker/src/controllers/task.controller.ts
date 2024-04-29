import { Request, Response } from "express";
import { Task } from "../models/Task";
import { addTaskRepository, deleteTaskRepository, getTaskRepository, getTasksRepository, updateTaskRepository } from "../repository/task.repository";

export const getTasksController = async(req: Request, res: Response)=>{
    try {
        const tasks : Task[] = await getTasksRepository();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getTaskController = async(req: Request, res: Response)=>{
    try {
        const taskId : string = req.params.id;
        const task : Task = await getTaskRepository(taskId);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const postTaskController = async(req: Request, res: Response)=>{    
    try {
        const task : Task = req.body;
        const resp : Task = await addTaskRepository(task);
        res.status(200).json({ok: 'agregado', data: resp});
    } catch (error) {
        res.status(500).json(error);
    }    
}

export const putTaskController = async(req: Request, res: Response)=>{
    try {
        const id : string = req.params.id
        const task : Task = req.body;
        await updateTaskRepository(task, id);
        res.status(200).json({ok: 'Modificado'});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteTaskController = async(req: Request, res: Response)=>{

    try {
        const id : string = req.params.id
        await deleteTaskRepository(id);
        res.status(200).json({ok: 'Eliminado'});
    } catch (error) {
        res.status(500).json(error);
    }
}