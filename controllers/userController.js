const db = require("../models");
const { getPagination, getPagingData } = require("./userService");
const User = db.userInfo;


exports.addUser=async(req,res)=>{
    let info={
        FullName:req.body.FullName,
        Email:req.body.email
    }
    console.log(info);
    const user=await User.create(info);
    res.status(200).send(user);
}

exports.findAllUser =(req, res) => {
    //frontend teke  asbe 
    console.log("dg");
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  User.findAndCountAll({limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error."
      });
    });
};
