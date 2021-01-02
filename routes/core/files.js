const multer = require('multer');
const router = require('express').Router();
const cloudinary = require('cloudinary').v2;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

router.post('/', (req, res, next) => {
    const upload = multer({ storage }).single('file');
    upload(req, res, (err) => {
      if (err) {
        return res.send(err);
      }
      cloudinary.config({
        cloud_name: process.env.cloudinary_cloudname,
        api_key: process.env.cloudinary_api_key,
        api_secret: process.env.cloudinary_api_secret
      });
      
      const path = req.file.path;
      const uniqueFilename = new Date().toISOString();
  
      cloudinary.uploader.upload(
        path,
        { public_id: `carepoint/${uniqueFilename}`, tags: `carepoint` }, // directory and tags are optional
        (err, image) => {
          if (err) {
            return res.send(err);
          }
          const fs = require('fs');
          fs.unlinkSync(path);
          res.json(image);
        }
      )
  });
});

module.exports = router