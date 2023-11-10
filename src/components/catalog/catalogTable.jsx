import { CatalogSectionContext, CatalogSectionAlbumsContext } from "@/servises/context";
import { useContext } from "react";
import CatalogSection from "./catalogSection";

const CatalogTable = () => {
  const [sections, setSections] = useContext(CatalogSectionContext);
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);

  sections?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });

  return (
    <div className="max-w-s mt-10 mx-auto">
      {sections?.map((section) => {
        const [id, title, logo, description, albumIds] = [
          section.id,
          section.attributes.title,
          section.attributes.logo,
          section.attributes.description,
          section.attributes.albums,
        ];
        const sectionAlbums = albums.filter((album) => albumIds?.includes(album.id));

        return (
          <CatalogSection
            key={id}
            id={id}
            title={title}
            logo={logo}
            description={description}
            albumIds={albumIds}
            sectionAlbums={sectionAlbums}
          />
        );
      })}
    </div>
  );
};

export default CatalogTable;
