import deleteFromFirebase from "@/api/deleteFromFirebase";
import Parse from "@/servises/parse";

const deleteGalleryImage = async (url, id, images) => {
  const deletedUrl = await deleteFromFirebase(url);

  const album = new Parse.Object("gallery");
  const newAlbumImages = images.filter((image) => image !== deletedUrl);

  album.set("objectId", id);
  album.set("albumImages", newAlbumImages);
  try {
    await album.save();
    return newAlbumImages;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteGalleryImage;
