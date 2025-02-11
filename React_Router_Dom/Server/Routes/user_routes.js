const {Router}=require("express");
const userController=require("../Controllers/user_controller");
const userRouter=Router();

userRouter.post("/signup",userController.createUser);
userRouter.post("/login",userController.loginUser);

module.exports=userRouter;