const {Router}=require("express");
const { create, getAllTasks, getByUserId } = require("../Controllers/task_controller");
const taskRoutes=Router();

taskRoutes.post("/",create);
taskRoutes.get("/",getAllTasks);
taskRoutes.get("/:userId",getByUserId);

module.exports=taskRoutes;