import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload on cloudinary
    const response = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uploaded
    console.log("file uploaded on cloudinary", response.ur);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove local save file
    return null;
  }
};

export { uploadOnCloudinary };
