const { Router } = require("express");
const router = Router();
const {verifyToken} = require('../middlewares/actions/verifyToken')
const { all , single , create , edit , suprimir } = require("../controllers/vehiculos");


router.get("/Vehiculos",all );
router.get("/Vehiculos/:id",single );
router.get("/admin/vehiculos", verifyToken ,all );
router.get("/admin/vehiculos/:id", verifyToken ,single );
router.post("/admin/vehiculos/post", verifyToken,create );
router.put("/admin/vehiculos/put/:id", verifyToken,edit );
router.delete("/admin/vehiculos/remove/:id", verifyToken,suprimir );

module.exports = router;
