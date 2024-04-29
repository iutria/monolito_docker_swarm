import { Task } from "../models/Task";
import { Response, addTask, getTask, getTasks, putTask } from "../repository/task.repository";



export const setDefaultController = async (set: any, _: any) => {
    set({isLoading: true})
    setTimeout(() => {
        set({task: {
            id: "",
            title: "",
            description: "",
            color: "#000",
        },
        isLoading: false
    })
    }, 50);
}

export const getTasksController = async (set: any, _: any) => {
    const response: Response = await getTasks();
    set({list: response.data});
}

export const getTaskController = async (set: any, _: any, id: string) => {
    set({isLoading: true});
    const resp = await getTask(id);
    set({isLoading: false, task: resp.data});
}

export const addTasksController = async (_set: any, _get: any, task: Task) : Promise<boolean> => {
    let resp : any;
    resp = await addTask(task);
    if(resp.status==200){
      alert(resp.data.ok);
      return true;
    }else{
        return false;
    }
}

export const putTasksController = async (_set: any, _: any, task: Task) : Promise<boolean> => {
    let resp : any;
    resp = await putTask(task);
    if(resp.status==200){
        alert(resp.data.ok);
        return true;
    }else{
        return false;
    }
}