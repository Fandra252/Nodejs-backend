import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on Cloudinary
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file hass been uploaded
    // console.log("File uploaded to Cloudinary successfully", result.url);
    fs.unlinkSync(localFilePath); // remove the local saved temporary file
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the local saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadToCloudinary };
