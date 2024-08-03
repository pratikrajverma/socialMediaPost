const Profile = require("../models/profile");
const cloudinary = require("cloudinary").v2;

const createProfile = async (req, res) => {
  try {
    const { title, description } = req.body;

    const { image, video } = req.files; 
 

    if(!title || !description || !image ||!video) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    console.log("data  :", title, description, image , video );

    //generic function to upload file to cloudinary

    async function UploadFileToCloudinary(file, folder) {
      const options = {
        folder,
        resource_type: "auto",
      };
      return cloudinary.uploader.upload(file.tempFilePath, options);
    }

    // for images...................
    const suportedFilesForImage = ["jpg", "png"];
    const imageFileType = image.name.split(".")[1].toLowerCase();

    if (!suportedFilesForImage.includes(imageFileType)) {
      return res.status(400).json({
        success: false,
        message: "Unsupported image format",
      });
    }

    //for videos...................
    const suportedFilesForVideo = ["mp4", "mp3"];

   const videoFileType = video.name.split(".")[1].toLowerCase();

    if (!suportedFilesForVideo.includes(videoFileType)) {
      return res.status(400).json({
        success: false,
        message: "Unsupported video format",
      });
    }

    console.log("videoFileType", videoFileType);

    const imageResponse = await UploadFileToCloudinary(image, "ImageUpload");

 

 const videoResponse = await UploadFileToCloudinary(video, "ImageUpload");

  

 
   const profile = await Profile.create({title, description , image:imageResponse.secure_url, video:videoResponse.secure_url })
 
    res.status(200).json({
      success: true,
      message: "Profile created successfully",
      data: profile,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in creating profile",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.find({});

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: profile,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in fetching profile details",
    });
  }
};

module.exports = { getProfile, createProfile };
