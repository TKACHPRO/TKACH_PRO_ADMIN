const FileButton = ({ onChange, images, id }) => {
  const personalId = !images || images?.length > 1 ? `${id}` : `${id}_${images[0]}`;

  return (
    <label
      key={personalId}
      htmlFor={personalId}
      className="relative flex justify-center items-center box-border border rounded-sm text-white bg-sky-500 text-white w-20 h-5 mr-2 cursor-pointer"
    >
      Add+
      <input id={personalId} type="file" className="hidden w-full h-full" onChange={(e) => onChange(e)} />
    </label>
  );
};

export default FileButton;
