import  Express  from "express";
import { getDataByOne, getUser, validateSignin, validateSignup,logOut } from "../controllers/maincontroller.js";
import { checkValidity } from "../Middlewares/mainmiddleware.js";
const router=Express.Router();


router.post("/signup",validateSignup)
router.post("/signin",validateSignin)
router.get("/getuser",checkValidity, getUser);
router.get("/getbyid/:_id",getDataByOne);
router.get("/logout",logOut);


export default router;