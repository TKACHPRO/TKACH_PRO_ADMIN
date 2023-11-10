import CatalogAlbumTitle from "./catalogAlbumTitle";
import CatalogAlbumLogo from "./catalogAlbumLogo";
import CatalogAlbumImages from "./catalogAlbumImages";
import CatalogAlbumDelete from "./catalogAlbumDelete";
import { useState } from "react";

const CatalogAlbum = ({ id, title, logo, images, sectionId, sectionAlbumsIds }) => {
  const [albumLogo, setAlbumLogo] = useState(logo);
  const [albumImages, setAlbumImages] = useState(images);

  return (
    <div className="p-2 mb-16 items-center border rounded-md border-current bg-darkMd">
      <CatalogAlbumTitle id={id} title={title} />
      <CatalogAlbumLogo id={id} logo={albumLogo} setAlbumLogo={setAlbumLogo} />
      <CatalogAlbumImages id={id} images={albumImages} setAlbumImages={setAlbumImages} />
      <CatalogAlbumDelete
        id={id}
        logo={albumLogo}
        images={albumImages}
        sectionId={sectionId}
        sectionAlbumsIds={sectionAlbumsIds}
      />
    </div>
  );
};

export default CatalogAlbum;
