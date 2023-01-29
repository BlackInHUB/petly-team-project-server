const multer = require('multer');
const {v4: uuid} = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './temp');
    },
    filename: function(req, file, cb) {
        const [filename, extension] = file.originalname.split('.');

        cb(null, uuid() + '-' + filename);
    }
})

const uploadMiddleware = multer({
    storage,
});

module.exports = uploadMiddleware;