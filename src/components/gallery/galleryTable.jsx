import { GalleryContext } from "@/servises/context";
import { useContext } from "react";
import GalleryAlbum from "./galleryAlbum";

const GalleryTable = () => {
  const [albums, setAlbums] = useContext(GalleryContext);

  albums?.sort((album1, album2) => {
    const [date1, date2] = [album1.attributes.createdAt, album2.attributes.createdAt];
    return new Date(date1) - new Date(date2);
  });
  return (
    <div className="max-w-s mt-10 mx-auto">
      {albums?.map((album) => {
        const [id, title, logo, images] = [
          album.id,
          album.attributes.albumTitle,
          album.attributes.albumLogo,
          album.attributes.albumImages,
        ];
        return <GalleryAlbum key={id} id={id} logo={logo} title={title} images={images} />;
      })}
    </div>
  );
};

export default GalleryTable;
