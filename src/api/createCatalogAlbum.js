import Parse from "@/servises/parse";
import uploadToFirebase from "@/api/uploadToFirebase";

const createCatalogAlbum = async (imgFiles, inputTitleText) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "catalog");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("catalog");
  album.set("logo", newLogoUrl);
  album.set("title", inputTitleText);
  album.set("images", []);
  try {
    await album.save();
    return album;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default createCatalogAlbum;
