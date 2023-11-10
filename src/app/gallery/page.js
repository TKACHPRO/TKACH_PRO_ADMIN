"use client";
import GalleryTable from "@/components/gallery/galleryTable";
import CreateAlbum from "@/components/gallery/createAlbum";
import { useEffect, useState } from "react";
import { GalleryContext } from "@/servises/context";
import Parse from "@/servises/parse";
import PageLink from "@/components/pageLink";

const getGallery = async () => {
  const gallery = new Parse.Query("gallery");
  try {
    const albums = await gallery.findAll();
    return albums;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const Gallery = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const getAlbums = async () => {
      const context = await getGallery();
      setAlbums(context);
    };
    if (!albums) getAlbums();
  }, [albums]);

  return (
    <GalleryContext.Provider value={[albums, setAlbums]}>
      <main>
        <PageLink url={"/catalog"} content={"Catalog"} className={`absolute top-10 left-10`} />

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl my-10"> Gallery </h1>
          <CreateAlbum />
        </div>
        <GalleryTable />
      </main>
    </GalleryContext.Provider>
  );
};
export default Gallery;
