import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateCatalogAlbumImages = async (imgFiles, id, currentImages) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "catalog");
  const newAlbumImages = newLogoUrls.map((url) => {
    return {
      url: url,
      author: "create new author",
    };
  });
  const album = new Parse.Object("catalog");

  album.set("objectId", id);
  album.set("images", [...currentImages, ...newAlbumImages]);
  try {
    await album.save();
    return newAlbumImages;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateCatalogAlbumImages;
