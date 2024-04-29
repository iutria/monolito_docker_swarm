import axios from "axios";
import { Task } from "../models/Task";

const url = import.meta.env.VITE_API;

export interface Response {
  status: number;
  data: any;
  isError: boolean;
}

export const getTasks = async (): Promise<Response> => {
  try {
    const response = await axios.get(url);
    return {
      status: response.status,
      data: response.data,
      isError: false,
    };
  } catch (error) {
    return {
      status: 404,
      isError: true,
      data: [],
    };
  }
};

export const getTask = async (id: string): Promise<Response> => {
  try {
    const response = await axios.get<Task>(`${url}/${id}`);
    return {
      status: response.status,
      data: response.data,
      isError: false,
    };
  } catch (error) {
    return {
      status: 404,
      isError: true,
      data: [],
    };
  }
};

export const addTask = async (task: Task): Promise<Response> => {
  try {
    const response = await axios.post(url, task);
    return {
      status: response.status,
      data: response.data,
      isError: false,
    };
  } catch (error) {
    return {
      status: 404,
      isError: true,
      data: [],
    };
  }
};

export const putTask = async (task: Task): Promise<Response> => {
  try {
    const response = await axios.put(`${url}/${task.id}`, task);
    return {
      status: response.status,
      data: response.data,
      isError: false,
    };
  } catch (error) {
    return {
      status: 404,
      isError: true,
      data: [],
    };
  }
};

export const deleteTask = async(id: string)=>{
  await axios.delete(`${url}/${id}`);
}
