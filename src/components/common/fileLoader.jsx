import FileButton from "./fileButton";
import Image from "next/image";

const FileLoader = ({ id, isLogo, images, imgFiles, setImgFiles, localFileUrls, setLocalFileUrls }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const localeUrl = window.URL.createObjectURL(file);
    if (!isLogo) {
      setLocalFileUrls([...localFileUrls, localeUrl]);
      setImgFiles([...imgFiles, file]);
    } else {
      setLocalFileUrls([localeUrl]);
      setImgFiles([file]);
    }
  };

  return (
    <div className="flex justify-center items-center ml-2">
      {localFileUrls?.length > 0 &&
        localFileUrls.map((localFileUrl) => {
          return (
            <Image
              key={localFileUrl}
              src={localFileUrl}
              alt="img"
              width="0"
              height="0"
              sizes="100vw"
              className="w-10 h-auto mr-1"
            />
          );
        })}
      <FileButton onChange={handleChange} images={images} id={id} />
    </div>
  );
};

export default FileLoader;
