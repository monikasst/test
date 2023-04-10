const router = require("express").Router();
const productController = require("../controllers/productController");
const Validation = require("../validation");
const { uploadImageAudio } = require("../middleware/uploadImage");
// const multer = require('multer');
// const upload = multer({
//     limits: {
//         fileSize: 100000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload a valid image file'))
//         }
//         cb(undefined, true)
//     }
// })
//router.post("/", uploadImageAudio.single('image'),Validation.productValidation, productController.product_create);
router.post("/", uploadImageAudio.single('image'),Validation.productValidation, productController.product_create);

router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);
router.post("/:productId", uploadImageAudio.single('image'), Validation.productValidation, productController.product_update);
router.delete("/:productId", productController.product_delete);

module.exports = router;
