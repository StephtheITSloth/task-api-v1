const getAllTasks = (req,res) => {
    res.send('GetAllTask');
}

const createTasks = (req,res) => {
    res.send('Get one ask');

}

const getSingleTask = (req,res) => {
    res.send('Get one Task');

}

const updateSingleTask = (req,res) => {
    res.send('pdate one task');
}

const deleteSingleTask = (req,res) => {
    res.send('delete one task');
}

module.exports = {
    getAllTasks, createTasks, getSingleTask, updateSingleTask, deleteSingleTask
}