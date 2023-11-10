import { getStorage, ref, deleteObject } from "firebase/storage";

const deleteFromFirebase = async (url) => {
  const storage = getStorage();
  const imageRef = ref(storage, url);

  try {
    deleteObject(imageRef);
    return url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteFromFirebase;
