import Parse from "@/servises/parse";

const updateCatalogAlbumTitle = async (id, inputText) => {
  if (!inputText) return;
  const album = new Parse.Object("catalog");
  album.set("objectId", id);
  album.set("title", inputText);
  try {
    await album.save();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateCatalogAlbumTitle;
