const { Router } = require('express')
const {createmarcas, getmarcas} =
 require('../controllers/marca')


const router = Router()


// crear
router.post('/', createmarcas)
// consultar todos
router.get('/', getmarcas)


module.exports = router;
