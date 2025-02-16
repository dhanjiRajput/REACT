const {Router}=require("express");
const indexRoutes=Router();
const userRoutes=require("./user_routes");
const taskRoutes = require("./task_route");

indexRoutes.use("/users",userRoutes);
indexRoutes.use("/task",taskRoutes);

module.exports=indexRoutes;