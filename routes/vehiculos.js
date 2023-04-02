const { Router } = require("express");
const router = Router();
const {verifyToken} = require('../middlewares/actions/verifyToken')
const { all , single , create , edit , suprimir } = require("../controllers/vehiculos");


router.get("/Vehiculos" ,all );
router.get("/Vehiculos/admin", verifyToken ,all );
router.get("/Vehiculos/admin/:id", verifyToken ,single );
router.get("/Vehiculos/:id",single );
router.post("/Vehiculos", verifyToken,create );
router.put("/Vehiculos/:id", verifyToken,edit );
router.delete("/Vehiculos/:id", verifyToken,suprimir );

module.exports = router;
