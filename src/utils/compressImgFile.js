import imageCompression from "browser-image-compression";

const compressImgFile = async (imgFiles) => {
  const options = {
    maxSizeMB: 3,
    maxWidthOrHeight: 1440,
    useWebWorker: true,
  };
  const promises = imgFiles.map((imgFile) => {
    const compressedFile = imageCompression(imgFile, options);
    return compressedFile;
  });
  try {
    const compressedFiles = await Promise.all(promises);

    return compressedFiles;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default compressImgFile;
