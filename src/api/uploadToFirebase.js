import firebaseApp from "@/servises/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import compressImgFile from "@/utils/compressImgFile";
import { v4 as uuidv4 } from "uuid";

const uploadToFirebase = async (imgFiles, path) => {
  const storage = getStorage(firebaseApp, `gs://tkachpro.appspot.com/`);
  const compressedFiles = await compressImgFile(imgFiles);

  const dataToUpload = compressedFiles.map((compressedFile) => {
    const id = uuidv4();
    const imageref = ref(storage, `/tkach/images/${path}/${compressedFile.name}_${id}`);

    return {
      file: compressedFile,
      imageref: imageref,
    };
  });

  try {
    const uploadPromises = dataToUpload.map((data) => {
      const res = uploadBytes(data.imageref, data.file);
      return res;
    });

    const newImages = await Promise.all(uploadPromises);

    const urlPromises = dataToUpload.map(async (data) => {
      const imgUrl = await getDownloadURL(data.imageref);
      return imgUrl;
    });

    const imgUrls = await Promise.all(urlPromises);

    return imgUrls;
  } catch (error) {
    console.error(error);
  }
};

export default uploadToFirebase;
