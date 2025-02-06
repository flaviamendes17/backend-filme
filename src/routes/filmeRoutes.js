const express = require("express");
const router = express.Router();
const filmeController = require("../controllers/filmeController");

router.get("/filmes", filmeController.getAllFilmes);
router.post("/filmes", filmeController.addFilme);
router.put("/filmes/:id", filmeController.updateFilme);
router.delete("/filmes/:id", filmeController.deleteFilme);
router.get("/filmes/:id", filmeController.getFilmeById); 

module.exports = router;