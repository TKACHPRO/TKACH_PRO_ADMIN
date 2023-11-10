import DeleteButton from "../common/deleteButton";
import { useContext } from "react";
import { CatalogSectionContext } from "@/servises/context";
import deleteCatalogSection from "@/api/deleteCatalogSection";

const CatalogSectionDelete = ({ logo, id, sectionAlbums }) => {
  const [sections, setSections] = useContext(CatalogSectionContext);

  const handleDelete = async () => {
    const deletedSection = await deleteCatalogSection(logo, id, sectionAlbums);
    if (deletedSection) {
      setSections(sections.filter((section) => section.id !== id));
    }
  };
  return (
    <div className="flex justify-end items-center">
      <DeleteButton onClick={() => handleDelete()} isAlbum={false} isSection={true} />
    </div>
  );
};

export default CatalogSectionDelete;
