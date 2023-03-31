const { Router } = require("express");
const router = Router();

const { all , create } = require("../controllers/consultas");

router.get("/Consultas", all );
router.post('/Consultas', create )

module.exports = router;
