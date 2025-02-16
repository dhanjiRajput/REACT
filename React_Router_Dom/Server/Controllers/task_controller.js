const Task = require("../Models/task_model");

const create = async (req, res) => {
    req.body.assignedBy = req.user.id;
    let task = await Task.create(req.body);
    return res.send(task);
};

const getAllTasks = async (req, res) => {
    let query = req.query || {};
    let tasks = await Task.find(query).populate("assignTo", "username").populate("assignedBy", "username");
    return res.send(tasks);
};
const getByUserId = async (req, res) => {
    let { userId } = req.params;
    let tasks = await Task.find({ assignTo: userId });
    return res.send(tasks);
};

module.exports = {
    create,
    getAllTasks,
    getByUserId,
};