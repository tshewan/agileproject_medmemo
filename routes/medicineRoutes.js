const express = require("express");
const router = express.Router();

const{
    getAllMedicines,
    createMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine,
}
 = require("../controllers/medicineController");



router.route("/").get(getAllMedicines).post(createMedicine);
router.route("/:id").get(getMedicineById).put(updateMedicine).delete(deleteMedicine);

module.exports = router;