import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateCatalogAlbumLogo = async (imgFiles, id) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "catalog");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("catalog");
  album.set("objectId", id);
  album.set("logo", newLogoUrl);
  try {
    await album.save();
    return newLogoUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateCatalogAlbumLogo;
