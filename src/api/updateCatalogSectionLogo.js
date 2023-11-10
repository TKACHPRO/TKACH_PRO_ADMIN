import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateCatalogSectionLogo = async (imgFiles, id) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "catalog");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("catalogSection");
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

export default updateCatalogSectionLogo;
