import deleteCatalogAlbum from "./deleteCatalogAlbum";

const deleteCatalogAlbums = async (sectionAlbums) => {
  const promises = sectionAlbums.map((album) => {
    const [logo, id, images] = [album.attributes.logo, album.id, album.attributes.images];

    return deleteCatalogAlbum(logo, images, id);
  });

  try {
    const result = await Promise.all(promises);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default deleteCatalogAlbums;
