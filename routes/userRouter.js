const userController =require('../controllers/userController');
console.log("Hello OWrld")
const router=require('express').Router();
router.post('/addUser',userController.addUser);
router.get("/getUser", userController.findAllUser);
module.exports=router;
