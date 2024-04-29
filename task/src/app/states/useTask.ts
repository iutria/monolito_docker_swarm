import { create } from 'zustand'
import { Task } from '../models/Task'
import { addTasksController, getTaskController, getTasksController, putTasksController, setDefaultController } from '../controllers/task.controller';

interface TaskStateModel{
    list: Task[];
    task: Task;
    isLoading: boolean,
    getTasks: ()=>void;
    getTask: (id: string)=>void;
    addTask: (task: Task)=>Promise<boolean>;
    putTask: (task: Task)=>Promise<boolean>;
    deleteTask: ()=>void;
    setDefault: ()=>void;
}

export const useTask = create<TaskStateModel>((set, get) => ({
    list: [] ,
    task: {
        id: "",
        title: "",
        description: "",
        color: "#000",
    },
    isLoading: false,
    setDefault: ()=>setDefaultController(set, get),
    getTasks: ()=>getTasksController(set, get),
    getTask: (id: string)=>getTaskController(set, get, id),
    addTask: (task: Task)=>addTasksController(set, get, task),
    putTask: (task: Task)=>putTasksController(set, get, task),
    deleteTask: ()=>getTasksController(set, get),
}))
