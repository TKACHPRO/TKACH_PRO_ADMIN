import deleteFromFirebase from "./deleteFromFirebase";
import deleteAllFromFirebase from "./deleteAllFromFirebase";
import Parse from "@/servises/parse";

const deleteCatalogAlbum = async (logo, images, id) => {
  const deletedLogo = await deleteFromFirebase(logo);

  if (images?.length > 0) {
    const imageUrls = images.map((image) => image.url);
    const deletedImages = await deleteAllFromFirebase(imageUrls);
  }
  const album = new Parse.Object("catalog");
  album.set("objectId", id);

  try {
    await album.destroy();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteCatalogAlbum;
