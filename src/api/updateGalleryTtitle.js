import Parse from "@/servises/parse";

const updateGalleryTitle = async (id, inputText) => {
  if (!inputText) return;
  const album = new Parse.Object("gallery");
  album.set("objectId", id);
  album.set("albumTitle", inputText);
  try {
    await album.save();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateGalleryTitle;
