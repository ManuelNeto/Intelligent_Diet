var Alimento = require("../models/alimento.model");


exports.save = async function (req,res){
    var alimento = new Alimento(req.body);
    alimento.save(function(err){
        if (err) {
            res.status(400).json({message:err.message, status:400});

        } else {
            res.status(200).json({message: "Sucesso.", status: 200});
        }
    })
}

exports.get = async function (req,res){
    Alimento.find({}, (err, alimentos)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            res.status(200).json({message:"Alimentos encontrados com sucesso",status:200,data:alimentos});
        }

    })
}

exports.deleteAlimento = function (req, res) {
    Alimento.findById(req.body.id, (err, alimento)=>{
        if(err){
            res.status(400).json({message: err.message, status:400});
        }else{
            if(alimento == null){
                res.status(404).json({message:" Alimento não encontrado", status: 404});
            }else{
                alimento.remove();
                res.status(200).json({message:"Alimento removido com sucesso", status:200});
            }
        }

    })
};

exports.editAlimento = async function (req, res) {
    let alimentoAtualizado = req.body;
    Alimento.findByIdAndUpdate(alimentoAtualizado._id, alimentoAtualizado,(err, alimentoAtualizado) => {
        if (err) {
            return res.status(400).json({message: err.message, status: 400});
        }
        return res.status(201).json({message: "Alimento editado com sucesso", status: 201, data: alimentoAtualizado.name});
    });

};

exports.getByType = async function (req,res){
    const type = req.params.type;
    Alimento.find({tipo: type}, (err, alimentos)=>{
        if(err){
            res.status(400).json({message:err.message, status:400});
        }else{
            res.status(200).json({message:"Alimentos encontrados com sucesso",status:200,data:alimentos});
        }

    })
}