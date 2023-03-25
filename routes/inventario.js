const { Router } = require('express')
const {createinventarios, getinventarios} =
 require('../controllers/inventario')


const router = Router()


// crear
router.post('/', createinventarios)
// consultar todos
router.get('/', getinventarios)


module.exports = router;
