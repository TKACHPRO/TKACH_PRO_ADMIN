import deleteAllFromFirebase from "./deleteAllFromFirebase";
import Parse from "@/servises/parse";

const deleteCatalogAlbumImages = async (id, images) => {
  const imageUrls = images.map((image) => image.url);
  const deleted = await deleteAllFromFirebase(imageUrls);

  const album = new Parse.Object("catalog");

  album.set("objectId", id);
  album.set("images", []);
  try {
    await album.save();
    return deleted;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteCatalogAlbumImages;
