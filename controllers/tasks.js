const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/async')
const {CustomAPIError, createCustomError} = require('../errors/custom-error')
const errorHandler = require('../middlewares/error-handler')

const getAllTasks =asyncWrapper( async (req,res, next) => {
        const tasks = await Task.find({})

        res.status(200).json({tasks});
})

const createTasks =asyncWrapper( async (req,res) => {
        const task = await Task.create(req.body)
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(201).json({task});
})

const getSingleTask =asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})

        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const updateSingleTask =asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({
            _id: taskID}, req.body, {new:true, runValidators: true})

        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const deleteSingleTask =asyncWrapper( async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})

        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404))
        }

        res.status(200).json({task})
})

module.exports = {
    getAllTasks, createTasks, getSingleTask, updateSingleTask, deleteSingleTask
}