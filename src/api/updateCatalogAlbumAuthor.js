import Parse from "@/servises/parse";

const updateCatalogAlbumAuthor = async (id, inputText, currentImages, idx) => {
  if (!inputText) return;
  const image = currentImages.at(idx);
  image.author = inputText;

  const album = new Parse.Object("catalog");
  album.set("objectId", id);
  album.set("images", currentImages);
  try {
    await album.save();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateCatalogAlbumAuthor;
