import deleteFromFirebase from "./deleteFromFirebase";
import deleteCatalogAlbums from "./deleteCatalogAlbums";
import Parse from "@/servises/parse";

const deleteCatalogSection = async (logo, id, sectionAlbums) => {
  const deletedLogo = await deleteFromFirebase(logo);
  if (sectionAlbums?.length > 0) {
    const deletedAlbums = await deleteCatalogAlbums(sectionAlbums);
  }
  const album = new Parse.Object("catalogSection");
  album.set("objectId", id);

  try {
    await album.destroy();
    return true;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default deleteCatalogSection;
