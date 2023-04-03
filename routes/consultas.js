const { Router } = require("express");
const router = Router();

const { all , create } = require("../controllers/consultas");
const { verifyToken } = require("../middlewares/actions/verifyToken");

router.get("/admin/Consultas", verifyToken , all );
router.post('/Consultas', verifyToken , create )

module.exports = router;
