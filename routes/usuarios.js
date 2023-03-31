const { Router } = require("express");
const router = Router();

const { all , create ,login } = require("../controllers/usuarios");

router.get("/Usuarios", all);
router.post('/Usuarios',create)
router.post('/Usuarios/login',login)


module.exports = router;