import db from "../config/mysql.config"
import { Task } from "../models/Task"

const TABLE_NAME = 'tasks'

export const getTasksRepository = async() : Promise<Task[]> => {
    return await db.query(`SELECT * FROM ${TABLE_NAME}`)
    .then(
        (values)=>{
            const [data] = values;
            return data as Task[];
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const getTaskRepository = async(id: string) : Promise<Task> => {
    return await db.query(`SELECT * FROM ${TABLE_NAME} where id = ?`,[id])
    .then(
        (values)=>{
            const data = values[0][0];
            return data;
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const addTaskRepository = async(task : Task)=>{
    return await db.query(
        `INSERT INTO ${TABLE_NAME}(TITLE, DESCRIPTION, COLOR) 
        VALUES (?,?,?)`,
        [task.title, task.description, task.color ]
    ).then(
        (value)=>{
            task.id = value[0]['insertId'];
            return task;
        }
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const updateTaskRepository = async(task : Task, id: string)=>{
    return await db.query(
        `UPDATE ${TABLE_NAME} SET TITLE=?, DESCRIPTION = ?, COLOR = ?
        WHERE ID=?`,
        [task.title ?? '', task.description ?? '', task.color ?? '', id]
    ).catch(
        (e)=>{
            throw e;
        }
    )
}

export const deleteTaskRepository = async(id: string)=>{
    return await db.query(
        `DELETE FROM ${TABLE_NAME} WHERE ID=?`,
        [id]
    ).catch(
        (e)=>{
            throw e;
        }
    )
}