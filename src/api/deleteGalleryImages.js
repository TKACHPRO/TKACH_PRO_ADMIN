import deleteAllFromFirebase from "./deleteAllFromFirebase";
import Parse from "@/servises/parse";

const deleteGalleryImages = async (id, images) => {
  const deleted = await deleteAllFromFirebase(images);

  const album = new Parse.Object("gallery");

  album.set("objectId", id);
  album.set("albumImages", []);
  try {
    await album.save();
    return deleted;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteGalleryImages;
