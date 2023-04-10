const multer = require('multer');
const path = require('path');
require("dotenv").config();
//<-----------======== Fetured Audio and Image ===============----------------->

let storageImageAudio = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {    
    let ext = path.extname(file.originalname);
    // cb(null, Date.now() + ext);
    // cb(null, "fetured" + "-" + Date.now() + ext);
    cb(null, file.originalname);
  },
});

exports.uploadImageAudio = multer({
  storage: storageImageAudio,
  fileFilter: function (req, file, callback) {
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
