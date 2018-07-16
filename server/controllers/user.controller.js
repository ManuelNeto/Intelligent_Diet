var User = require("../models/user.model");
var Util = require("../util/util");

exports.save = async function (req,res){
    var user = new User({
      gender: req.body.gender,
      age: req.body.age,
      height:req.body.height,
      weight:req.body.weight,
      goal:req.body.goal,
      levelOfPhysicalActivity:req.body.levelOfPhysicalActivity,
      totalDailyCalories: Util.calculateTotalDailyCalories(req.body)
    });
    user.save(function(err){
        if (err) {
            res.status(400).json({message:err.message, status:400});

        } else {
            res.status(200).json({message: "Sucesso.", status: 200});
        }
    })
}

exports.get = async function (req,res){
    User.findOne({_id: req.params.id}, (err, user)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            res.status(200).json({message:"Usuário encontrados com sucesso",status:200,data:user});
        }

    })
}

exports.getAll = async function (req,res){
    User.find({}, (err, users)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            res.status(200).json({message:"Usuários encontrados com sucesso",status:200,data:users});
        }

    })
}

exports.editUser = async function (req, res) {
    let editUser = req.body;
    User.findByIdAndUpdate(editUser._id, editUser,(err, editUser) => {
        if (err) {
            return res.status(400).json({message: err.message, status: 400});
        }
        return res.status(201).json({message: "Usuário editado com sucesso", status: 201, data: editUser});
    });

};
