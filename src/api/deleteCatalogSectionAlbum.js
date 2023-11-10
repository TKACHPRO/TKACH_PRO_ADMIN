import Parse from "@/servises/parse";

const deleteCatalogSectionAlbum = async (id, sectionAlbumsIds, deletedId) => {
  const newAlbumsIds = sectionAlbumsIds.filter((albumId) => albumId !== deletedId);
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

export default deleteCatalogSectionAlbum;
