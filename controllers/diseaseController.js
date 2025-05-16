const diseaseModels = require("../services/diseaseService");

exports.getAllDiseases = async (req, res) => {
    try {
        const diseases = await diseaseModels.getAllDiseases();
        res.json({data: diseases, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createDisease = async (req, res) => {
    try {
        const diseases = await diseaseModels.createDisease(req.body);
        res.json({data: diseases, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getDiseaseById = async (req, res) => {
    try {
        const diseases = await diseaseModels.getDiseaseById(req.params.id, req.body);
        res.json({data: diseases, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.updateDisease = async (req, res) => {
    try {
        const diseases = await diseaseModels.updateDisease(req.params.id, req.body);
        res.json({data: diseases, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteDisease = async (req, res) => {
    try {
        const diseases = await diseaseModels.deleteDisease(req.params.id);
        res.json({data: diseases, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};