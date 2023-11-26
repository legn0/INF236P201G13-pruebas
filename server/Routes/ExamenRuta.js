const express = require("express");
const router = express.Router();
const examenController = require("../Controllers/examenController");

router.route('/')
    .get(examenController.getAllExamenes)
    .post(examenController.crearExamen)

router.route('/:fecha')
    .get(examenController.getExamenesFecha)
module.exports = router;