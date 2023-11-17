"use client";
import { useEffect, useState } from "react";
import { CatalogSectionContext, CatalogSectionAlbumsContext } from "@/servises/context";
import Parse from "@/servises/parse";
import CatalogTable from "@/components/catalog/catalogTable";
import CreateSection from "@/components/catalog/createSection";
import PageLink from "@/components/pageLink";

export const metadata = {
  title: "Dashboard catalog",
  description: "TkachPro admin dashboard catalog",
};

const getCatalogSections = async () => {
  const catalogSections = new Parse.Query("catalogSection");
  try {
    const sections = await catalogSections.findAll();
    return sections;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getCatalogSectionAlbums = async () => {
  const catalogSectionAlbums = new Parse.Query("catalog");
  try {
    const albums = await catalogSectionAlbums.findAll();
    return albums;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const Catalog = () => {
  const [sections, setSections] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const getSections = async () => {
      const sectionsContext = await getCatalogSections();
      const albumsContext = await getCatalogSectionAlbums();
      setSections(sectionsContext);
      setAlbums(albumsContext);
    };
    if (!sections) getSections();
  }, [sections]);

  return (
    <CatalogSectionContext.Provider value={[sections, setSections]}>
      <CatalogSectionAlbumsContext.Provider value={[albums, setAlbums]}>
        {sections && (
          <main>
            <PageLink url={"/gallery"} content={"Gallery"} className={`absolute top-10 left-10`} />

            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-3xl my-10"> Catalog </h1>
              <CreateSection />
            </div>
            <CatalogTable />
          </main>
        )}
      </CatalogSectionAlbumsContext.Provider>
    </CatalogSectionContext.Provider>
  );
};
export default Catalog;
