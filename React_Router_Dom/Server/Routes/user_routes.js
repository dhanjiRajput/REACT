const {Router}=require("express");
const userController=require("../Controllers/user_controller");
const userRoutes=Router();

userRoutes.post("/signup",userController.createUser);
userRoutes.post("/login",userController.loginUser);
userRoutes.get("/",userController.getAllUsers);

module.exports=userRoutes;