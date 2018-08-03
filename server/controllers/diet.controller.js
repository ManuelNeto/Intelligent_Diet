var Diet = require("../models/diet.model");


exports.save = async function (req,res){
    console.log("@@@@@@@@@@");

    var diet = new Diet(req.body);
    diet.save(function(err){
        if (err) {
            res.status(400).json({message:err.message, status:400});

        } else {
            res.status(200).json({message: "Sucesso.", status: 200});
        }
    })
}

exports.get = async function (req,res){
    Diet.findOne({_id: req.params.id}, (err, diet)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            res.status(200).json({message:"Dieta encontrada com sucesso",status:200,data:diet});
        }

    })
}


exports.getAll = async function (req,res){
    Diet.find({}, (err, diets)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            res.status(200).json({message:"Dietas encontradas com sucesso",status:200,data:diets});
        }

    })
}
