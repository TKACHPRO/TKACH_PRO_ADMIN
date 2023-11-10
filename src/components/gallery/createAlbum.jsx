import AddButton from "@/components/common/addButton";
import FileLoader from "../common/fileLoader";
import { useContext, useState } from "react";
import createGalleryAlbum from "@/api/createGalleryAlbum";
import { GalleryContext } from "@/servises/context";

const CreateAlbum = () => {
  const [albums, setAlbums] = useContext(GalleryContext);
  const [inputText, setInputText] = useState("");
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);

  const id = "new-gallery-logo";

  const handleCreate = async () => {
    if (!inputText) {
      console.log("empty input");
      return;
    }
    if (imgFiles.length === 0) {
      console.log("empty logo");
      return;
    }
    const newAlbum = await createGalleryAlbum(imgFiles, inputText);
    setInputText("");
    setLocalFileUrls([]);
    setAlbums([...albums, newAlbum]);
  };

  return (
    <div className="flex max-w-s mx-auto flex-col items-center h-fit justify-between p-2 border rounded-md">
      {" "}
      <label htmlFor="gallery-create" className="mr-auto">
        {" "}
        New Title:
        <input
          id="gallery-create"
          type="text"
          className="ml-2 text-dark mt-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
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
