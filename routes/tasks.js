const express = require('express')
const router = express.Router()
const {getAllTasks,getSingleTask,createTasks,updateSingleTask,deleteSingleTask} = require('../controllers/tasks')

router.get('/', getAllTasks)

router.post('/', createTasks)

router.get('/:id', getSingleTask)

router.patch('/:id', updateSingleTask)

router.delete('/:id', deleteSingleTask)

module.exports = router