import deleteFromFirebase from "@/api/deleteFromFirebase";
import Parse from "@/servises/parse";

const deleteCatalogAlbumImage = async (url, id, images) => {
  const deletedUrl = await deleteFromFirebase(url);

  const album = new Parse.Object("catalog");
  const newAlbumImages = images.filter((image) => image.url !== deletedUrl);

  album.set("objectId", id);
  album.set("images", newAlbumImages);
  try {
    await album.save();
    return newAlbumImages;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteCatalogAlbumImage;
