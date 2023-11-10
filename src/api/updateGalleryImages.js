import uploadToFirebase from "@/api/uploadToFirebase";
import Parse from "@/servises/parse";

const updateGalleryImages = async (imgFiles, id, currentImages) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "gallery");
  const album = new Parse.Object("gallery");

  album.set("objectId", id);
  album.set("albumImages", [...currentImages, ...newLogoUrls]);
  try {
    await album.save();
    return newLogoUrls;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateGalleryImages;
