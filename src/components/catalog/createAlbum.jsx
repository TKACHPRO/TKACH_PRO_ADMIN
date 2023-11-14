import AddButton from "@/components/common/addButton";
import FileLoader from "../common/fileLoader";
import { useContext, useState } from "react";
import createCatalogAlbum from "@/api/createCatalogAlbum";
import updateCatalogSectionAlbums from "@/api/updateCatalogSectionAlbums";
import { CatalogSectionAlbumsContext } from "@/servises/context";

const CreateAlbum = ({ id, albumIds, sectionId }) => {
  const [albums, setAlbums] = useContext(CatalogSectionAlbumsContext);
  const [inputTitleText, setInputTitleText] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);

  const handleCreate = async () => {
    if (!inputTitleText) {
      console.log("empty title");
      return;
    }
    if (imgFiles.length === 0) {
      console.log("empty logo");
      return;
    }

    const newAlbum = await createCatalogAlbum(imgFiles, inputTitleText);
    if (newAlbum) {
      const sectionAlbums = await updateCatalogSectionAlbums(id, albumIds, newAlbum);
      setInputTitleText("");
      setLocalFileUrls([]);
      setAlbums([...albums, newAlbum]);
    }
  };

  return (
    <div className="flex max-w-s p-2 mx-auto flex-col items-center h-fit justify-between mb-20 rounded-md border">
      <b>Create Album</b>{" "}
      <label htmlFor={sectionId}>
        {" "}
        New Title:
        <input
          id={sectionId}
          type="text"
          className="ml-2 text-dark mt-2"
          value={inputTitleText}
          onChange={(e) => setInputTitleText(e.target.value)}
        />
      </label>
      <div className="flex items-center my-2">
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

export default CreateAlbum;
