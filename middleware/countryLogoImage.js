const multer = require('multer');
const path = require('path');
require("dotenv").config();
//<-----------======== Fetured Audio and Image ===============----------------->

let storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/countyLogo/');
  },
  filename: function (req, file, cb) {    
    let ext = path.extname(file.originalname);
    // console.log(ext);
    // cb(null, Date.now() + ext);
    // cb(null, "fetured" + "-" + Date.now() + ext);
    cb(null, file.originalname);
  },
});

exports.uploadLogo = multer({
  storage: storageImage,
  fileFilter: function (req, file, callback) {
    console.log(file.mimetype);
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg"
    ) {
      callback(null, true);
    } else {
      // callback(null, false);              
      // this is For callBack False and Console print Only.
      // console.log("Only image/jpeg and image/png and audio/mp3 and image/webp files are supported!");
      console.log("monika");
      callback(
        "Only image/jpeg and image/png and audio/mp3 and image/webp files are supported!"
      );
    }
  },
});


// const upload = multer({
//   limits: {
//       fileSize: 100000000
//   },
//   fileFilter(req, file, cb) {
//       if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//           return cb(new Error('Please upload a valid image file'))
//       }
//       cb(undefined, true)
//   }
// })
