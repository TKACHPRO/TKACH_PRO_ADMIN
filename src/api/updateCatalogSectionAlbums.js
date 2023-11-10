import Parse from "@/servises/parse";

const updateCatalogSectionAlbums = async (id, albumIds, newAlbum) => {
  if (!newAlbum) return;
  const newAlbumsIds = [...albumIds, newAlbum.id];
  const album = new Parse.Object("catalogSection");
  album.set("objectId", id);
  album.set("albums", newAlbumsIds);
  try {
    await album.save();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default updateCatalogSectionAlbums;
