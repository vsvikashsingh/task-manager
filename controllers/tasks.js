import { asyncWrapper } from "../middleware/asyncWrapper.js";
import Task from "../models/Task.js";   
import { createCustomError } from '../errors/custom-error.js';

export const getAllTasks = asyncWrapper(async (req,res, next) =>{
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    })

export const createTask = asyncWrapper(async (req, res, next)=>{
    const body = req.body;
    console.log(body)
    const task = await Task.create(body)
    res.status(201).json({ task })
})

export const getTask = asyncWrapper(async (req, res, next)=>{
        const { taskID } = req.params;
        const task = await Task.findOne({_id:taskID}) //match _id in doc to params id
        res.status(200).json({ task })
        if(!task){
            return createCustomError(`No such task found with id: ${taskID}`, 404)
        }
})

export const updateTask = asyncWrapper(async (req, res, next)=>{
        const { taskID } = req.params;
        console.log(taskID)
        const task = await Task.findOneAndUpdate({ _id:taskID },req.body, { new:true, runValidators:true })
        res.status(201).json({ task })
        if(!task){
            return createCustomError(`No such task found with id: ${taskID}`, 404)
        }
})

export const deleteTask = asyncWrapper(async (req, res, next)=>{
        const { taskID } = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        res.status(200).json({ task })
        if(!task){
            return createCustomError(`No such task found with id: ${taskID}`, 404)
        }
})