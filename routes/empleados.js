const {Router} = require('express')
const router = Router()

const { all,single,create,edit, suprimir } = require('../controllers/empleados')

router.get("/empleados",all)
router.get("/empleados/:id",single)
router.post("/empleados",create)
router.put("/empleados/:id",edit)
router.delete("/empleados/:id",suprimir)



module.exports = router