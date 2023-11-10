import GalleryAlbumTitle from "./galleryAlbumTitle";
import GalleryAlbumLogo from "./galleryAlbumLogo";
import GalleryAlbumImages from "./galleryAlbumImages";
import GalleryAlbumDelete from "./galleryAlbumDelete";
import { useState } from "react";

const GalleryAlbum = ({ id, title, logo, images }) => {
  const [albumLogo, setAlbumLogo] = useState(logo);
  const [albumImages, setAlbumImages] = useState(images);

  return (
    <div className="p-2 mb-16 items-center border rounded-md border-current bg-darkHd">
      <GalleryAlbumTitle title={title} id={id} />
      <GalleryAlbumLogo logo={albumLogo} id={id} setAlbumLogo={setAlbumLogo} />
      <GalleryAlbumImages images={albumImages} id={id} setAlbumImages={setAlbumImages} />
      <GalleryAlbumDelete logo={albumLogo} images={albumImages} id={id} />
    </div>
  );
};

export default GalleryAlbum;
