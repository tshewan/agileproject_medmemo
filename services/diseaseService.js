const diseaseModel = require('../model/diseaseModels')

exports.getAllDiseases = async () => {
    return await diseaseModel.find();
};

exports.createDisease = async (disease) => {
    return await diseaseModel.create(disease);
};

exports.getDiseaseById = async (id) => {
    return await diseaseModel.findById(id);
};

exports.updateDisease = async (id, disease) => {
    return await diseaseModel.findByIdAndUpdate(id, disease);
};

exports.deleteDisease = async (id) => {
    return await diseaseModel.findByIdAndDelete(id);
};