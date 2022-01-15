const express= require("express")
const router = express.Router()

const {getAllProductById,getAllProducts} = require('../controller/productController')

//@desc Get all product from db
//@route get /api/products
//@access public
router.get('/',getAllProducts)


//@desc Get all product by id from db
//@route get /api/products/:id
//@access public
router.get('/:id',getAllProductById)

module.exports = router;