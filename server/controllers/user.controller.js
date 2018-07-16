var User = require("../models/user.model");


exports.save = async function (req,res){
    var user = new User(req.body);
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

exports.editUser = async function (req, res) {
    let editUser = req.body;
    User.findByIdAndUpdate(editUser._id, editUser,(err, editUser) => {
        if (err) {
            return res.status(400).json({message: err.message, status: 400});
        }
        return res.status(201).json({message: "Usuário editado com sucesso", status: 201, data: editUser});
    });

};
