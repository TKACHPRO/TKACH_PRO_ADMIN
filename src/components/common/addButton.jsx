import CommonButton from "./commonButton";

const AddButton = ({ onClick }) => {
  return <CommonButton className="bg-sky-500 w-24" content="Add album" onClick={onClick} />;
};

export default AddButton;
