const express = require("express");
const router = express.Router();

const{
    getAllDiseases,
    createDisease,
    getDiseaseById,
    updateDisease,
    deleteDisease,
}
 = require("../controllers/diseaseController");



router.route("/").get(getAllDiseases).post(createDisease);
router.route("/:id").get(getDiseaseById).put(updateDisease).delete(deleteDisease);

module.exports = router;