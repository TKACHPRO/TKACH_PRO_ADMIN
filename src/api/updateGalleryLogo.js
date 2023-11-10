import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateGalleryLogo = async (imgFiles, id) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "gallery");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("gallery");
  album.set("objectId", id);
  album.set("albumLogo", newLogoUrl);
  try {
    await album.save();
    return newLogoUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateGalleryLogo;
