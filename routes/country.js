const router = require("express").Router();
const countryController = require("../controllers/countryController"); 
const Validation = require("../validation");
const { uploadLogo } = require("../middleware/countryLogoImage");
    
router.post("/", uploadLogo.single('logo'), Validation.countryValidation, countryController.addCountry);
router.get("/", countryController.countryList);
router.get("/:countryId", countryController.countryDetails);
router.post("/:countryId", uploadLogo.single('logo'), Validation.countryValidation, countryController.countryUpdate);
router.delete("/:countryId", countryController.countryDelete);

module.exports = router;