import deleteFromFirebase from "./deleteFromFirebase";
import deleteAllFromFirebase from "./deleteAllFromFirebase";
import Parse from "@/servises/parse";

const deleteGalleryAlbum = async (logo, images, id) => {
  const deletedLogo = await deleteFromFirebase(logo);
  if (images?.length > 0) {
    const deletedImages = await deleteAllFromFirebase(images);
  }
  const album = new Parse.Object("gallery");
  album.set("objectId", id);

  try {
    await album.destroy();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteGalleryAlbum;
