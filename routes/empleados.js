const {Router} = require('express')
const router = Router()

const { all,single,create,edit, suprimir } = require('../controllers/empleados')
const { verifyToken } = require('../middlewares/actions/verifyToken')

router.get("/admin/empleados",verifyToken,all)
router.get("/admin/empleados/:id",verifyToken,single)
router.post("/admin/empleados/post",verifyToken,create)
router.put("/admin/empleados/put/:id",verifyToken,edit)
router.delete("/admin/empleados/remove/:id",verifyToken,suprimir)



module.exports = router