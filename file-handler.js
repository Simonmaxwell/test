const fs = require('fs-extra');
const multer = require('multer');                                           

var tempStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function(req, file, cb) {
        let originalName = file.originalname;
        let fileName = file.originalname.replace(/.pdf/, "");
        cb(null, fileName + "-" + Date.now() + '.pdf');
    }
});

var upload = multer({storage : tempStorage}).single('pdf');

module.exports = {upload, tempStorage};