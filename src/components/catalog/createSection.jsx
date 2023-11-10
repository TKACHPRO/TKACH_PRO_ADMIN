import AddButton from "@/components/common/addButton";
import FileLoader from "../common/fileLoader";
import { useContext, useState } from "react";
import createCatalogSection from "@/api/createCatalogSection";
import { CatalogSectionContext } from "@/servises/context";

const CreateSection = () => {
  const [sections, setSections] = useContext(CatalogSectionContext);
  const [inputTitleText, setInputTitleText] = useState("");
  const [inputDescriptionText, setInputDescriptionText] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);

  const id = "new-catalog-section";

  const handleCreate = async () => {
    if (!inputTitleText) {
      console.log("empty input");
      return;
    }
    if (imgFiles.length === 0) {
      console.log("empty logo");
      return;
    }
    if (!inputDescriptionText) {
      console.log("empty description");
      return;
    }

    const newSection = await createCatalogSection(imgFiles, inputTitleText, inputDescriptionText);
    setInputTitleText("");
    setInputDescriptionText("");
    setLocalFileUrls([]);
    setSections([...sections, newSection]);
  };

  return (
    <div className="flex max-w-s mx-auto flex-col items-center h-fit justify-between mb-4 p-2 border rounded-md">
      <b>Create Section</b>{" "}
      <label htmlFor="gallery-create-title" className="mr-auto">
        {" "}
        New Title:
        <input
          id="gallery-create-title"
          type="text"
          className="ml-2 text-dark"
          value={inputTitleText}
          onChange={(e) => setInputTitleText(e.target.value)}
        />
      </label>
      <label htmlFor="gallery-create-description" className="mr-auto my-2">
        {" "}
        New Description:
        <input
          id="gallery-create-description"
          type="text"
          className="ml-2 text-dark"
          value={inputDescriptionText}
          onChange={(e) => setInputDescriptionText(e.target.value)}
        />
      </label>
      <div className="flex items-center mb-2">
        New Logo:
        <FileLoader
          id={id}
          images={[id]}
          isLogo={true}
          imgFiles={imgFiles}
          setImgFiles={setImgFiles}
          localFileUrls={localFileUrls}
          setLocalFileUrls={setLocalFileUrls}
        />
      </div>
      <AddButton onClick={handleCreate} />
    </div>
  );
};

export default CreateSection;
