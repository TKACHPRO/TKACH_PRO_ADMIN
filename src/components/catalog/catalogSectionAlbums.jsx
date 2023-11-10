import { CatalogSectionAlbumsContext } from "@/servises/context";
import { useContext } from "react";
import CatalogAlbum from "./catalogAlbum";
import CreateAlbum from "./createAlbum";

const CatalogSectionAlbums = ({ id, albumIds, sectionId }) => {
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);
  const sectionAlbums = albums.filter((album) => albumIds.includes(album.id));

  sectionAlbums?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });

  return (
    <div className="max-w-s mt-10 mx-auto">
      <CreateAlbum id={id} albumIds={albumIds} />

      {sectionAlbums?.map((album) => {
        const [id, title, logo, images] = [
          album.id,
          album.attributes.title,
          album.attributes.logo,
          album.attributes.images,
        ];

        return (
          <CatalogAlbum
            key={id}
            id={id}
            title={title}
            logo={logo}
            images={images}
            sectionId={sectionId}
            sectionAlbumsIds={albumIds}
          />
        );
      })}
    </div>
  );
};

export default CatalogSectionAlbums;
