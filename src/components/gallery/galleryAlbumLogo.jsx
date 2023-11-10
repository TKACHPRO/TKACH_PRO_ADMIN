import Image from "next/image";
import EditButton from "../common/editButton";
import FileLoader from "../common/fileLoader";
import { useState } from "react";
import updateGalleryLogo from "@/api/updateGalleryLogo";
import deleteFromFirebase from "@/api/deleteFromFirebase";

const GalleryAlbumLogo = ({ id, logo, setAlbumLogo }) => {
  const [imgFiles, setImgFiles] = useState([]);
  const [localFileUrls, setLocalFileUrls] = useState([]);
  const [currentLogo, setCurrentLogo] = useState(logo);

  const handleUpdate = async (imgFiles, id) => {
    const newLogo = await updateGalleryLogo(imgFiles, id);
    if (newLogo) {
      await deleteFromFirebase(currentLogo);
      setCurrentLogo(newLogo);
      setLocalFileUrls([]);
      setAlbumLogo(newLogo);
    }
  };

  return (
    <div className="flex items-center mb-2 border-b pb-2">
      Logo:
      <Image src={currentLogo} alt="logo" width="0" height="0" sizes="100vw" className="w-20 h-auto mr-auto" />
      <FileLoader
        id={id}
        isLogo={true}
        images={[logo]}
        imgFiles={imgFiles}
        setImgFiles={setImgFiles}
        localFileUrls={localFileUrls}
        setLocalFileUrls={setLocalFileUrls}
      />
      <EditButton onClick={() => handleUpdate(imgFiles, id)} />
    </div>
  );
};

export default GalleryAlbumLogo;
