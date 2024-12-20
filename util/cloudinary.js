const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

const uploadFile = (imageBuffer) => {
  return new Promise((resolve, reject) => {
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    streamifier.createReadStream(imageBuffer).pipe(stream);
  });
};

module.exports = uploadFile;
