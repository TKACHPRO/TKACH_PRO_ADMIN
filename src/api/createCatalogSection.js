import Parse from "@/servises/parse";
import uploadToFirebase from "@/api/uploadToFirebase";

const createCatalogSection = async (imgFiles, inputTitleText, inputDescriptionText) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "catalog");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("catalogSection");
  album.set("logo", newLogoUrl);
  album.set("title", inputTitleText);
  album.set("description", inputDescriptionText);
  album.set("albums", []);
  try {
    await album.save();
    return album;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default createCatalogSection;
