import express from 'express'

import { getAllTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/tasks.js';

export const router= express.Router()

router.route('/').get(getAllTasks)
router.route('/').post(createTask)
router.route('/:taskID').get(getTask)
router.route('/:taskID').patch(updateTask)
router.route('/:taskID').delete(deleteTask)

