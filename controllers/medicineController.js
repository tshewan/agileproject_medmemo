const medicineModel = require("../services/medicineService");

exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await medicineModel.getAllMedicines();
        res.json({data: medicines, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.createMedicine = async (req, res) => {
    try {
        const medicines = await medicineModel.createMedicine(req.body);
        res.json({data: medicines, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.getMedicineById = async (req, res) => {
    try {
        const medicines = await medicineModel.getMedicineById(req.params.id, req.body);
        res.json({data: medicines, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.updateMedicine = async (req, res) => {
    try {
        const medicines = await medicineModel.updateMedicine(req.params.id, req.body);
        res.json({data: medicines, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteMedicine = async (req, res) => {
    try {
        const medicines = await medicineModel.deleteMedicine(req.params.id);
        res.json({data: medicines, status: "success"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};