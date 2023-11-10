import Parse from "@/servises/parse";
import uploadToFirebase from "@/api/uploadToFirebase";

const createGalleryAlbum = async (imgFiles, inputText) => {
  const newLogoUrls = await uploadToFirebase(imgFiles, "gallery");
  const newLogoUrl = newLogoUrls[0];
  const album = new Parse.Object("gallery");
  album.set("albumLogo", newLogoUrl);
  album.set("albumTitle", inputText);
  album.set("albumImages", []);
  try {
    await album.save();
    return album;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default createGalleryAlbum;
