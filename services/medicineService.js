const MedicineModel = require('../model/medicineModel')

exports.getAllMedicines = async () => {
    return await MedicineModel.find();
};

exports.createMedicine = async (medicine) => {
    return await MedicineModel.create(medicine);
};

exports.getMedicineById = async (id) => {
    return await MedicineModel.findById(id);
};

exports.updateMedicine = async (id, medicine) => {
    return await MedicineModel.findByIdAndUpdate(id, medicine);
};

exports.deleteMedicine = async (id) => {
    return await MedicineModel.findByIdAndDelete(id);
};