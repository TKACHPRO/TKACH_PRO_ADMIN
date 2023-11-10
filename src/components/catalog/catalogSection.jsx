import CatalogSectionTitle from "./catalogSectionTitle";
import CatalogSectionLogo from "./catalogSectionLogo";
import CatalogSectionDescription from "./catalogSectionDescription";
import CatalogSectionAlbums from "./catalogSectionAlbums";
import CatalogSectionDelete from "./catalogSectionDelete";
import { useState } from "react";

const CatalogSection = ({ id, title, logo, description, albumIds, sectionAlbums }) => {
  const [sectionLogo, setSectionLogo] = useState(logo);

  return (
    <div className="p-2 mb-16 items-center border rounded-md border-current bg-darkHd">
      <CatalogSectionTitle id={id} title={title} />
      <CatalogSectionLogo id={id} logo={sectionLogo} setSectionLogo={setSectionLogo} />
      <CatalogSectionDescription id={id} description={description} />
      <CatalogSectionAlbums id={id} albumIds={albumIds} sectionId={id} />
      <CatalogSectionDelete id={id} logo={sectionLogo} sectionAlbums={sectionAlbums} />
    </div>
  );
};

export default CatalogSection;
